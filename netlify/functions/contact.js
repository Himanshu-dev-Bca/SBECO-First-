/**
 * Netlify serverless function: POST /.netlify/functions/contact
 *
 * 1. Validates the Cloudflare Turnstile token server-side
 * 2. If valid, forwards the form data to Web3Forms for email delivery
 * 3. Returns the result to the frontend
 *
 * Environment variables required (set in Netlify dashboard):
 *   TURNSTILE_SECRET_KEY  — from Cloudflare Turnstile dashboard
 *   WEB3FORMS_KEY         — your Web3Forms access key
 */

export default async function handler(req) {
  // Only allow POST
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ success: false, message: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { turnstileToken, name, email, mobile, company, subject, message } = body;

    // ── 1. Verify the Turnstile token with Cloudflare ──
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (!turnstileSecret) {
      console.error('TURNSTILE_SECRET_KEY env variable is not set');
      return new Response(
        JSON.stringify({ success: false, message: 'Server configuration error.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
      }),
    });

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      console.warn('Turnstile verification failed:', verifyData);
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Security verification failed. Please refresh the page and try again.',
        }),
        { status: 403, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // ── 2. Forward form data to Web3Forms ──
    const web3formsKey = process.env.WEB3FORMS_KEY;
    if (!web3formsKey) {
      console.error('WEB3FORMS_KEY env variable is not set');
      return new Response(
        JSON.stringify({ success: false, message: 'Server configuration error.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: web3formsKey,
        from_name: name,
        subject: `SBECO: ${subject || 'General Enquiry'} — from ${name}`,
        name,
        email: email || 'no-email-provided@example.com',
        phone: mobile || 'Not provided',
        company: company || 'Not specified',
        topic: subject || 'General Enquiry',
        message,
        botcheck: '',
      }),
    });

    const emailData = await emailResponse.json();

    if (emailData.success) {
      return new Response(
        JSON.stringify({ success: true, message: 'Message sent successfully!' }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      console.error('Web3Forms error:', emailData);
      return new Response(
        JSON.stringify({
          success: false,
          message: emailData.message || 'Failed to send message. Please try again.',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (err) {
    console.error('Function error:', err);
    return new Response(
      JSON.stringify({ success: false, message: 'An unexpected error occurred.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

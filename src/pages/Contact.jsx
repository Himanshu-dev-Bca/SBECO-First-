import { useState } from 'react';
import Hero from '../components/Hero';

const WEB3FORMS_KEY = 'b1b9178c-a2eb-40d0-9704-277ac889a758'; // Will be set after creating access key

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { alert('Please fill in all required fields.'); return; }

    setSending(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: form.name,
          subject: `SBECO: ${form.subject || 'General Enquiry'} — from ${form.name}`,
          name: form.name,
          email: form.email,
          company: form.company || 'Not specified',
          topic: form.subject || 'General Enquiry',
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again or contact us directly.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Hero label="Contact · Super Bright Labs" title="Get In Touch"
        subtitle="Have a question about our products, need a bulk quote, or want to discuss your packaging requirements? We're here to help." />

      <section className="px-8 md:px-12 py-14">
        <div className="text-[15px] font-semibold tracking-[.15em] uppercase flex items-center gap-3 mb-7 pb-3.5 border-b-2 border-black">
          Send Us A Message <span className="text-[11px] text-gray-400 font-light">01</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          <div>
            {!submitted ? (
              <div className="border border-gray-200 bg-white p-9 animate-fade-up">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your name', required: true },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email', required: true },
                  { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your company (optional)' },
                ].map(f => (
                  <div key={f.id} className="mb-5">
                    <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">{f.label}</label>
                    <input type={f.type} value={form[f.id]} onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                      placeholder={f.placeholder}
                      className="w-full border border-gray-200 px-4 py-3.5 text-[13px] text-black bg-white outline-none focus:border-black transition-colors" />
                  </div>
                ))}
                <div className="mb-5">
                  <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">Subject</label>
                  <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    className="w-full border border-gray-200 px-4 py-3.5 text-[13px] text-black bg-white outline-none focus:border-black transition-colors">
                    <option value="">Select a topic...</option>
                    <option>Product Enquiry</option>
                    <option>Bulk Order Quote</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-5">
                  <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">Message</label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us how we can help..." rows={6}
                    className="w-full border border-gray-200 px-4 py-3.5 text-[13px] text-black bg-white outline-none focus:border-black transition-colors resize-y" />
                </div>

                {error && (
                  <div className="mb-5 text-[12px] text-red-600 bg-red-50 border border-red-200 px-4 py-3">
                    {error}
                  </div>
                )}

                <button onClick={handleSubmit} disabled={sending}
                  className={`inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase border-none cursor-pointer hover:bg-accent-hover hover:-translate-y-0.5 transition-all ${sending ? 'opacity-60 cursor-not-allowed' : ''}`}>
                  {sending ? 'Sending...' : 'Submit Request →'}
                </button>
              </div>
            ) : (
              <div className="border border-gray-200 bg-white p-10 text-center border-l-4 border-l-emerald-500 animate-fade-up">
                <h3 className="text-[14px] font-bold uppercase tracking-[.08em] mb-2 text-emerald-500">Message Sent Successfully</h3>
                <p className="text-[13px] text-gray-600 leading-relaxed">Thank you for reaching out. Your message has been sent to our team. We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', subject: '', message: '' }); }}
                  className="mt-5 inline-flex items-center gap-2 px-6 py-2.5 border border-gray-200 bg-white text-[11px] font-semibold tracking-[.08em] uppercase text-gray-600 cursor-pointer hover:border-black transition-all">
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-5">
            {[
              { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />, label: 'Phone / WhatsApp', value: '+91 88847 46746', detail: 'Mon–Sat, 10:00 AM – 7:30 PM IST' },
              { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>, label: 'Email', value: 'himanshu.chand@bcah.christuniversity.in', detail: 'We typically respond within 24 hours' },
              { icon: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>, label: 'Office Address', value: 'Bangalore, India', detail: 'Visit us by appointment during business hours' },
              { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, label: 'Business Hours', value: 'Mon – Sat', detail: '10:00 AM – 7:30 PM IST · Closed on Sundays' },
            ].map((info, i) => (
              <div key={i} className="border border-gray-200 bg-white p-7 hover:border-black hover:-translate-y-0.5 transition-all animate-fade-up" style={{ animationDelay: `${i * .08}s` }}>
                <div className="w-10 h-10 bg-accent rounded-[10px] flex items-center justify-center mb-3.5">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">{info.icon}</svg>
                </div>
                <div className="text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-1.5">{info.label}</div>
                <div className="text-[14px] font-semibold">{info.value}</div>
                <div className="text-[12px] text-gray-600 mt-1 leading-relaxed">{info.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

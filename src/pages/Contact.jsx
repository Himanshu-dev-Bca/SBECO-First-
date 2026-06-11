import { useState, useEffect, useCallback } from 'react';
import Hero from '../components/Hero';
import CloudflareTurnstile from '../components/CloudflareTurnstile';

const WEB3FORMS_KEY = 'b1b9178c-a2eb-40d0-9704-277ac889a758';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    subject: '',
    message: '',
  });

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!form.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }

    // Email OR Mobile - at least one required
    const hasEmail = form.email.trim();
    const hasMobile = form.mobile.trim();

    if (!hasEmail && !hasMobile) {
      newErrors.contact = 'Please provide either an email address or mobile number';
    }

    // Validate email if provided
    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate mobile if provided
    if (hasMobile && !/^[0-9]{10,}$/.test(form.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid mobile number (10+ digits)';
    }

    // Turnstile verification is required
    if (!turnstileToken) {
      newErrors.turnstile = 'Please complete the security verification';
    }

    return newErrors;
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  const handleSubmit = async () => {
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          from_name: form.name,
          subject: `SBECO: ${form.subject || 'General Enquiry'} — from ${form.name}`,
          name: form.name,
          email: form.email || form.mobile,
          phone: form.mobile || 'Not provided',
          company: form.company || 'Not specified',
          topic: form.subject || 'General Enquiry',
          message: form.message,
          'cf-turnstile-response': turnstileToken,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({
          name: '',
          email: '',
          mobile: '',
          company: '',
          subject: '',
          message: '',
        });
        setTurnstileToken('');
      } else {
        setErrors({ general: 'Something went wrong. Please try again or contact us directly.' });
      }
    } catch (err) {
      setErrors({ general: 'Network error. Please check your connection and try again.' });
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
                {/* Full Name */}
                <div className="mb-6">
                  <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full border px-4 py-3.5 text-[13px] text-black bg-white outline-none transition-all ${
                      errors.name
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200 bg-red-50'
                        : 'border-gray-200 focus:border-black'
                    }`}
                  />
                  {errors.name && (
                    <div className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1.5 animate-slide-down">
                      <span>⚠</span> {errors.name}
                    </div>
                  )}
                </div>

                {/* Email & Mobile - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className={`w-full border px-4 py-3.5 text-[13px] text-black bg-white outline-none transition-all ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200 bg-red-50'
                          : 'border-gray-200 focus:border-black'
                      }`}
                    />
                    {errors.email && (
                      <div className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1.5 animate-slide-down">
                        <span>⚠</span> {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={form.mobile}
                      onChange={e => handleInputChange('mobile', e.target.value)}
                      placeholder="+91 9XXXXX XXXXX"
                      className={`w-full border px-4 py-3.5 text-[13px] text-black bg-white outline-none transition-all ${
                        errors.mobile
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200 bg-red-50'
                          : 'border-gray-200 focus:border-black'
                      }`}
                    />
                    {errors.mobile && (
                      <div className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1.5 animate-slide-down">
                        <span>⚠</span> {errors.mobile}
                      </div>
                    )}
                  </div>
                </div>

                {/* Contact Field Error - Email OR Mobile */}
                {errors.contact && (
                  <div className="mb-6 p-3.5 bg-red-50 border border-red-300 rounded-sm flex items-start gap-3 animate-slide-down">
                    <span className="text-red-600 font-bold text-[14px] mt-0.5">!</span>
                    <div>
                      <div className="text-[11px] font-semibold text-red-700">{errors.contact}</div>
                      <div className="text-[10px] text-red-600 mt-1">Please provide at least one contact method to proceed.</div>
                    </div>
                  </div>
                )}

                {/* Company */}
                <div className="mb-6">
                  <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={e => handleInputChange('company', e.target.value)}
                    placeholder="Your company name"
                    className="w-full border border-gray-200 px-4 py-3.5 text-[13px] text-black bg-white outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Subject */}
                <div className="mb-6">
                  <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={form.subject}
                    onChange={e => handleInputChange('subject', e.target.value)}
                    className={`w-full border px-4 py-3.5 text-[13px] text-black bg-white outline-none transition-all appearance-none cursor-pointer ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200 bg-red-50'
                        : 'border-gray-200 focus:border-black'
                    }`}
                  >
                    <option value="">Select a topic...</option>
                    <option>Product Enquiry</option>
                    <option>Bulk Order Quote</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Other</option>
                  </select>
                  {errors.subject && (
                    <div className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1.5 animate-slide-down">
                      <span>⚠</span> {errors.subject}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={e => handleInputChange('message', e.target.value)}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    className={`w-full border px-4 py-3.5 text-[13px] text-black bg-white outline-none transition-all resize-y ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200 bg-red-50'
                        : 'border-gray-200 focus:border-black'
                    }`}
                  />
                  {errors.message && (
                    <div className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1.5 animate-slide-down">
                      <span>⚠</span> {errors.message}
                    </div>
                  )}
                </div>

                {/* General Error */}
                {errors.general && (
                  <div className="mb-6 p-3.5 bg-red-50 border border-red-300 rounded-sm flex items-start gap-3 animate-slide-down">
                    <span className="text-red-600 font-bold text-[14px] mt-0.5">!</span>
                    <div className="text-[11px] text-red-700">{errors.general}</div>
                  </div>
                )}

                {/* Cloudflare Turnstile Widget */}
                <div className="mb-6">
                  <label className="block text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-2">
                    Security Verification <span className="text-red-500">*</span>
                  </label>
                  <CloudflareTurnstile
                    onVerify={(token) => {
                      setTurnstileToken(token);
                      if (errors.turnstile) {
                        setErrors((prev) => ({ ...prev, turnstile: '' }));
                      }
                    }}
                    onExpire={() => setTurnstileToken('')}
                    onError={() => {
                      setTurnstileToken('');
                      setErrors((prev) => ({
                        ...prev,
                        turnstile: 'Verification failed. Please try again.',
                      }));
                    }}
                  />
                  {errors.turnstile && (
                    <div className="text-[11px] text-red-600 mt-1.5 flex items-center gap-1.5 animate-slide-down">
                      <span>⚠</span> {errors.turnstile}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={sending}
                  className={`inline-flex items-center gap-2.5 px-8 py-3.5 bg-accent text-white text-[11px] font-bold tracking-[.12em] uppercase border-none cursor-pointer transition-all ${
                    sending
                      ? 'opacity-60 cursor-not-allowed'
                      : 'hover:bg-accent-hover hover:-translate-y-0.5'
                  }`}
                >
                  {sending ? (
                    <>
                      <span className="inline-block animate-spin">⟳</span> Sending...
                    </>
                  ) : (
                    <>Submit Request →</>
                  )}
                </button>
              </div>
            ) : (
              <div className="border border-l-4 border-l-emerald-500 border-gray-200 bg-white p-10 text-center animate-fade-up">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-[14px] font-bold uppercase tracking-[.08em] mb-2 text-emerald-600">
                  Message Sent Successfully
                </h3>
                <p className="text-[13px] text-gray-600 leading-relaxed mb-6">
                  Thank you for reaching out. Your message has been received by our team. We'll get back to you within 24 hours using the contact method you provided.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: '',
                      email: '',
                      mobile: '',
                      company: '',
                      subject: '',
                      message: '',
                    });
                    setTurnstileToken('');
                    setErrors({});
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 border border-gray-200 bg-white text-[11px] font-semibold tracking-[.08em] uppercase text-gray-600 cursor-pointer hover:border-black hover:bg-gray-50 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-5">
            {[
              {
                icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />,
                label: 'Phone / WhatsApp',
                value: '+91 88847 46746',
                detail: 'Mon–Sat, 10:00 AM – 7:30 PM IST'
              },
              {
                icon: (
                  <>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </>
                ),
                label: 'Email',
                value: 'himanshu.chand@bcah.christuniversity.in',
                detail: 'We typically respond within 24 hours'
              },
              {
                icon: (
                  <>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </>
                ),
                label: 'Office Address',
                value: 'Bangalore, India',
                detail: 'Visit us by appointment during business hours'
              },
              {
                icon: (
                  <>
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </>
                ),
                label: 'Business Hours',
                value: 'Mon – Sat',
                detail: '10:00 AM – 7:30 PM IST · Closed on Sundays'
              },
            ].map((info, i) => (
              <div
                key={i}
                className="border border-gray-200 bg-white p-7 hover:border-black hover:-translate-y-0.5 transition-all animate-fade-up"
                style={{ animationDelay: `${i * .08}s` }}
              >
                <div className="w-10 h-10 bg-accent rounded-[10px] flex items-center justify-center mb-3.5">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-2">
                    {info.icon}
                  </svg>
                </div>
                <div className="text-[10px] font-bold tracking-[.12em] uppercase text-gray-400 mb-1.5">
                  {info.label}
                </div>
                <div className="text-[14px] font-semibold">{info.value}</div>
                <div className="text-[12px] text-gray-600 mt-1 leading-relaxed">{info.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.2s ease;
        }
      `}</style>
    </>
  );
}

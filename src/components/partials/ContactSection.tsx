import React, { useRef, useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ─── EmailJS Configuration ─────────────────────────────────────────────────
// Create a free account at https://emailjs.com and fill in your credentials:
const EMAILJS_SERVICE_ID = 'service_vags50t';
const EMAILJS_TEMPLATE_ID = 'template_24d5uiu';
const EMAILJS_PUBLIC_KEY = 'ThqedR6XlwBs8iyYb';
// ───────────────────────────────────────────────────────────────────────────

const contactInfo = [
  { icon: <FiMail size={20} />, label: 'Email', value: 'rajeshjanyani7@gmail.com', href: 'mailto:rajeshjanyani7@gmail.com' },
  { icon: <FiPhone size={20} />, label: 'Phone', value: '+91 97241 67245', href: 'tel:+919724167245' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: 'Vadodara, Gujarat, India', href: undefined },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '0.5rem',
    padding: '0.75rem 1rem',
    color: '#f9fafb',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'Rubik, sans-serif',
  };

  return (
    <div id="contact" className="py-24">
      <p className="section-label">&gt; Contact</p>
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-divider" />
      <p className="mb-10 text-sm max-w-lg" style={{ color: '#6b7280' }}>
        I&apos;m currently open to new opportunities. Whether you have a question, a project in mind, or just want to say hi — my inbox is always open.
      </p>

      <div className="grid gap-10 lg:grid-cols-5">
        {/* Contact Info */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          {contactInfo.map(({ icon, label, value, href }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl p-5"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: 'rgba(255, 255, 255,0.08)', color: '#ffffff' }}
              >
                {icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#555', fontFamily: 'JetBrains Mono, monospace' }}>{label}</p>
                {href ? (
                  <a href={href} className="text-sm font-medium" style={{ color: '#d1d5db' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color = '#d1d5db'}
                  >{value}</a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: '#d1d5db' }}>{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-xl p-6 lg:col-span-3"
          style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>Name</label>
              <input
                name="user_name"
                required
                placeholder="Your name"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(255, 255, 255,0.4)'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-wider" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>Email</label>
              <input
                name="user_email"
                type="email"
                required
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(255, 255, 255,0.4)'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'}
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-wider" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>Subject</label>
            <input
              name="subject"
              required
              placeholder="What's this about?"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'rgba(255, 255, 255,0.4)'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-wider" style={{ color: '#6b7280', fontFamily: 'JetBrains Mono, monospace' }}>Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              style={{ ...inputStyle, resize: 'vertical' }}
              onFocus={e => e.target.style.borderColor = 'rgba(255, 255, 255,0.4)'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full justify-center"
            style={{ opacity: status === 'sending' ? 0.7 : 1 }}
          >
            <FiSend size={14} />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-center text-sm" style={{ color: '#ffffff' }}>
              ✓ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-center text-sm" style={{ color: '#f87171' }}>
              Failed to send. Please email me directly at rajeshjanyani7@gmail.com
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;

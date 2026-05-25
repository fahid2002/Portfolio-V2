'use client';

import { useRef, useState } from 'react';
import { profile } from '../../data/profile';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

const SVC = 'portfolio_contact';
const TPL = 'template_iaahw7s';
const KEY = 'lBxVNHzTLuf-OpVjJ';

const socialIcons = {
  github:    { Icon: FaGithub,    label: 'GitHub'    },
  linkedin:  { Icon: FaLinkedin,  label: 'LinkedIn'  },
  facebook:  { Icon: FaFacebook,  label: 'Facebook'  },
  x:         { Icon: FaTwitter,  label: 'X'         },
  instagram: { Icon: FaInstagram, label: 'Instagram' },
};

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.sendForm(SVC, TPL, formRef.current, KEY);
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  const whatsappHref = `https://wa.me/${profile.phone.replace('+', '')}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;

  return (
    <section className="contact-sec" id="contact">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-label">Contact</span>
          <span className="eyebrow-line"></span>
        </div>

        <div className="contact-big">
          Let&apos;s Build
          <br />
          <em>Something</em>
          <br />
          Together.
        </div>

        <div className="contact-grid">
          {/* ── LEFT: contact info ── */}
          <div>
            <div className="ci-item">
              <div className="ci-icon">📞</div>
              <div>
                <div className="ci-label">Phone</div>
                <a href={`tel:${profile.phone}`} className="ci-val">
                  {profile.displayPhone}
                </a>
              </div>
            </div>

            <div className="ci-item">
              <div
                className="ci-icon"
                style={{ background: 'rgba(37,211,102,.1)', color: '#25d366' }}
              >
                💬
              </div>
              <div>
                <div className="ci-label">WhatsApp</div>
                <a
                  href={whatsappHref}
                  className="ci-val"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.displayPhone}
                </a>
              </div>
            </div>

            <div className="ci-item">
              <div className="ci-icon">✉</div>
              <div>
                <div className="ci-label">Email</div>
                <a
                  href={gmailHref}
                  className="ci-val"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <div className="ci-item">
              <div className="ci-icon">📍</div>
              <div>
                <div className="ci-label">Location</div>
                <span className="ci-val">{profile.location}</span>
              </div>
            </div>

            {/* ── Find Me Online with icons ── */}
            <div className="soc-sec-h">Find Me Online</div>

            <div className="soc-row">
              {Object.entries(profile.socials).map(([key, href]) => {
                const entry = socialIcons[key];
                if (!entry) return null;
                const { Icon, label } = entry;
                return (
                  <a
                    key={key}
                    href={href}
                    className="soc-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: EmailJS form ── */}
          <form ref={formRef} className="cf" onSubmit={onSubmit}>
            <div className="cf-big">Send a Message</div>

            <div className="cf-sub">
              Have a project in mind? Drop me a message and I&apos;ll get back
              to you promptly.
            </div>

            <div className="cf-row">
              <div className="cf-group">
                <label className="cf-label">Your Name</label>
                <input
                  className="cf-input"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="cf-group">
                <label className="cf-label">Your Email</label>
                <input
                  className="cf-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="hello@example.com"
                  required
                />
              </div>
            </div>

            <div className="cf-group">
              <label className="cf-label">Subject</label>
              <input
                className="cf-input"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Project Collaboration"
                required
              />
            </div>

            <div className="cf-group">
              <label className="cf-label">Message</label>
              <textarea
                className="cf-textarea"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'sent' && (
              <p style={{ color: '#44ff88', marginTop: '0.75rem', fontSize: '0.85rem' }}>
                ✓ Message sent! I&apos;ll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff4444', marginTop: '0.75rem', fontSize: '0.85rem' }}>
                ✗ Something went wrong. Email me directly at {profile.email}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

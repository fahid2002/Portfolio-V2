import { profile } from '../../data/profile';

export default function ContactSection() {
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
                style={{
                  background: 'rgba(37,211,102,.1)',
                  color: '#25d366',
                }}
              >
                💬
              </div>
              <div>
                <div className="ci-label">WhatsApp</div>
                <a
                  href={`https://wa.me/${profile.phone.replace('+', '')}`}
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
                <a href={`mailto:${profile.email}`} className="ci-val">
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

            <div className="soc-sec-h">Find Me Online</div>

            <div className="soc-row">
              {Object.entries(profile.socials).map(([key, value]) => (
                <a
                  href={value}
                  className="soc-item"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={key}
                >
                  ↗ {key}
                </a>
              ))}
            </div>
          </div>

          <form className="cf" action={`mailto:${profile.email}`}>
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
                  placeholder="Your name"
                />
              </div>

              <div className="cf-group">
                <label className="cf-label">Your Email</label>
                <input
                  className="cf-input"
                  type="email"
                  name="email"
                  placeholder="hello@example.com"
                />
              </div>
            </div>

            <div className="cf-group">
              <label className="cf-label">Subject</label>
              <input
                className="cf-input"
                name="subject"
                placeholder="Project Collaboration"
              />
            </div>

            <div className="cf-group">
              <label className="cf-label">Message</label>
              <textarea
                className="cf-textarea"
                name="body"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              className="btn btn-primary"
              style={{ alignSelf: 'flex-start' }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';
import { profile } from '../../data/profile';

function SocialIcon({ name }) {
  const key = String(name).toLowerCase();

  if (key.includes('github')) {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 2.1 3.3 1.5.1-.8.4-1.3.7-1.6-2.6-.3-5.4-1.3-5.4-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.1 5.9 18.1 6.2 18.1 6.2c.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
    );
  }

  if (key.includes('linkedin')) {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4v15h-4V8Zm7.5 0h3.8v2.1h.1c.5-1 1.9-2.4 4-2.4 4.3 0 5.1 2.8 5.1 6.5V23h-4v-7.8c0-1.9 0-4.2-2.6-4.2s-3 2-3 4.1V23h-4V8Z" />
      </svg>
    );
  }

  if (key.includes('facebook')) {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.63.78-1.63 1.57v1.9h2.78l-.44 2.91h-2.34V22A10.03 10.03 0 0 0 22 12.06Z" />
      </svg>
    );
  }

  if (key.includes('instagram')) {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (key === 'x' || key.includes('twitter')) {
    return (
      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.4L5.7 22H2.6l7.3-8.4L2.2 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.8h1.7L7.8 4.1H6L17.8 19.8Z" />
      </svg>
    );
  }

  return <span className="social-icon">↗</span>;
}

export default function HeroSection() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-bg"></div>

        <div
          className="hero-deco"
          style={{
            top: '15%',
            right: '37%',
            fontFamily: 'DM Mono, monospace',
            fontSize: '.6rem',
            color: 'var(--hi)',
            opacity: 0.28,
            animation: 'float 4s ease-in-out infinite',
          }}
        >
          {'{ dev }'}
        </div>

        <div className="hero-left">
          <div className="profile-card">
            <div className="profile-img-wrap">
              <Image
                src="/images/profile.jpg"
                alt="Fahid Hasan"
                width={420}
                height={560}
                priority
              />
            </div>

            <div className="profile-info">
              <div className="profile-name">{profile.name}</div>
              <div className="profile-role">{profile.role}</div>
              <div className="profile-location">📍 {profile.location}</div>
            </div>
          </div>

          <div className="status-badge">
            <span className="status-dot"></span>
            Available for Work
          </div>
        </div>

        <div className="hero-right">
          <h1 className="hero-name">
  <span className="hero-line">FAHID</span>
  <span className="hero-line hi">HASAN</span>
</h1>

          <div className="hero-desg">
            <span>Software Engineer</span>
            <span className="sep">|</span>
            <span>MERN Stack Developer</span>
            <span>Graphics Designer</span>
            <span className="sep">|</span>
            <span>UI / UX Designer</span>
          </div>

          <p className="hero-bio">{profile.bio}</p>

         <div className="hero-btns">
  <a href="https://drive.google.com/uc?export=download&id=16bluss4RwLwPzUPNHJ0SB7P6xCz0LOtv" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
    {'↓'} Resume
  </a>
</div>

          <div className="hero-socials">
            {Object.entries(profile.socials).map(([key, value]) => (
              <a
                key={key}
                href={value}
                className="soc-btn"
                target="_blank"
                rel="noopener noreferrer"
                title={key}
                aria-label={key}
              >
                <SocialIcon name={key} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track" aria-hidden="true">
          {[
            ...profile.skills.flatMap((skill) => skill.items),
            ...profile.skills.flatMap((skill) => skill.items),
          ].map((item, index) => (
            <div className="m-item" key={`${item}-${index}`}>
              <span className="m-dot"></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

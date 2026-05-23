import Image from 'next/image';
import { profile } from '../../data/profile';

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
          <div className="hero-mono">// Hello, World.</div>

          <h1 className="hero-name">
            FAHID
            <br />
            <span className="hi">HASAN</span>
          </h1>

          <div className="hero-desg">
            <span>Software Engineer</span>
            <span className="sep">—</span>
            <span>MERN Stack Developer</span>
            <span className="sep">—</span>
            <span>UI/UX Designer</span>
          </div>

          <p className="hero-bio">{profile.bio}</p>

          <div className="hero-btns">
            <a href="/resume.pdf" className="btn btn-primary" download>
              Resume
            </a>

            <a href="#contact" className="btn btn-outline">
              Let&apos;s Talk →
            </a>
          </div>

          <div className="resume-note">
            Resume file option is ready. Add your CV as public/resume.pdf later.
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
              >
                ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track" aria-hidden="true">
          {[...profile.skills.flatMap((skill) => skill.items), ...profile.skills.flatMap((skill) => skill.items)].map(
            (item, index) => (
              <div className="m-item" key={index}>
                <span className="m-dot"></span>
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
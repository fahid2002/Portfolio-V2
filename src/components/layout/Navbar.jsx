'use client';

import { useEffect, useState } from 'react';
import { profile } from '../../data/profile';

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [talk, setTalk] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const close = () => setMobile(false);

  const navItems = ['home', 'about', 'skills', 'education', 'projects', 'ai', 'contact'];

  return (
    <>
      <nav id="navbar">
        <a href="/#top" className="nav-logo">
          fahid<span>.</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`/#${item}`}>
                {item === 'ai' ? 'AI' : item[0].toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? '☀' : '☾'}
          </button>

          <button className="nav-talk-btn" onClick={() => setTalk(true)}>
            Let&apos;s Talk ✦
          </button>

          <button
            className="hamburger"
            onClick={() => setMobile(!mobile)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${mobile ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item} href={`/#${item}`} onClick={close}>
            {item === 'ai' ? 'AI' : item[0].toUpperCase() + item.slice(1)}
          </a>
        ))}
      </div>

      <div
        className={`lt-backdrop ${talk ? 'open' : ''}`}
        onClick={() => setTalk(false)}
      ></div>

      <div className={`lt-overlay ${talk ? 'open' : ''}`}>
        <button className="lt-close" onClick={() => setTalk(false)}>
          ✕
        </button>

        <div className="lt-eyebrow">✦ COMMUNICATIONS</div>

        <div className="lt-title">
          LET&apos;S
          <br />
          TALK
        </div>

        <div className="lt-items">
          <a href={`tel:${profile.phone}`} className="lt-item">
            <div className="lt-icon phone">📞</div>
            <div>
              <div className="lt-lbl">PHONE</div>
              <div className="lt-val">{profile.displayPhone}</div>
            </div>
          </a>

          <a
            href={`https://wa.me/${profile.phone.replace('+', '')}`}
            className="lt-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lt-icon wa">💬</div>
            <div>
              <div className="lt-lbl">WHATSAPP</div>
              <div className="lt-val">{profile.displayPhone}</div>
            </div>
          </a>

          <a href={`mailto:${profile.email}`} className="lt-item">
            <div className="lt-icon email">✉</div>
            <div>
              <div className="lt-lbl">EMAIL</div>
              <div className="lt-val">{profile.email}</div>
            </div>
          </a>

          <a
            href={profile.socials.linkedin}
            className="lt-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lt-icon li">💼</div>
            <div>
              <div className="lt-lbl">LINKEDIN</div>
              <div className="lt-val">linkedin.com/in/fahid-hasan-280425382/</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
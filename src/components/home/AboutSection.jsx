'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '../../data/profile';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const statsRef = useRef(null);

  useEffect(() => {
    if (!statsRef.current) return;

    const counters = statsRef.current.querySelectorAll('.stat-n');

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      const countObject = { value: 0 };

      gsap.to(countObject, {
        value: target,
        duration: 1.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          counter.textContent = `${Math.floor(countObject.value)}+`;
        },
        onComplete: () => {
          counter.textContent = `${target}+`;
        },
      });
    });
  }, []);

  return (
    <section className="about-sec" id="about">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-label">About Me</span>
              <span className="eyebrow-line"></span>
            </div>

            <h2 className="about-heading">
              The Dev <em>Behind</em>
              <br />
              The Code
            </h2>

            <p className="about-p">{profile.bio}</p>

            <p className="about-p">
              My focus is building practical web products with strong frontend design,
              reliable backend logic, secure authentication, and clean responsive layouts.
            </p>

            <p className="about-p">
              Outside coding, I enjoy UI/UX design, creative poster work, and improving
              my problem-solving skills through real projects.
            </p>

            <div className="about-stats" ref={statsRef}>
              <div className="stat-box">
                <div className="stat-n" data-target="10">
                  0+
                </div>
                <div className="stat-l">Projects</div>
              </div>

              <div className="stat-box">
                <div className="stat-n" data-target="14">
                  0+
                </div>
                <div className="stat-l">Technologies</div>
              </div>

              <div className="stat-box">
                <div className="stat-n" data-target="2">
                  0+
                </div>
                <div className="stat-l">Yrs Building</div>
              </div>
            </div>
          </div>

          <div>
            <div className="about-panel">
              <div className="about-quote">
                &quot;Code is like humor.<br/>  When you have to explain it, it&apos;s bad.&quot;
              </div>

              <div className="about-quote-attr">— Cory House</div>

              <div className="about-chips">
                <span className="tag">📍 Dhaka, BD</span>
                <span className="tag">🎓 CSE @ DIU</span>
                <span className="tag">💼 Open to Freelance</span>
                <span className="tag">🚀 MERN Stack</span>
                <span className="tag">🔐 JWT Auth</span>
                <span className="tag">🎨 UI/UX Design</span>
                <span className="tag">🖥 VS Code</span>
                <span className="tag">✍ Poster Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
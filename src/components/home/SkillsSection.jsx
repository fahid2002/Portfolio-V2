'use client';

import { useState } from 'react';
import { profile } from '../../data/profile';

export default function SkillsSection() {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);

    const section = document.getElementById(`sg${index + 1}`);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <section className="skills-sec" id="skills">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-label">Skills & Technologies</span>
          <span className="eyebrow-line"></span>
        </div>

        <h2 className="sec-heading" style={{ marginBottom: '2.5rem' }}>
          My <span className="hi">Arsenal</span>
        </h2>

        <div className="skills-layout">
          <div className="skills-sidebar">
            <ul>
              {profile.skills.map((skillGroup, index) => (
                <li
                  className={active === index ? 'on' : ''}
                  key={skillGroup.title}
                  onClick={() => handleClick(index)}
                >
                  {String(index + 1).padStart(2, '0')} {skillGroup.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-content">
            {profile.skills.map((skillGroup, index) => (
              <div
                className={`sg ${active === index ? 'sg-active' : ''}`}
                id={`sg${index + 1}`}
                key={skillGroup.title}
              >
                <div className="sg-head">
                  <span className="sg-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="sg-title">{skillGroup.title}</span>
                </div>

                <div className="sg-tags">
                  {skillGroup.items.map((item) => (
                    <span className="sk-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
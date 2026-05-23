'use client';

import { useMemo, useState } from 'react';
import { projects } from '../../data/projects';
import { profile } from '../../data/profile';

function getSkillsText() {
  if (!profile.skills) {
    return 'React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, JWT Authentication';
  }

  if (Array.isArray(profile.skills)) {
    return profile.skills
      .flatMap((group) => group.items || group)
      .join(', ');
  }

  if (typeof profile.skills === 'object') {
    return Object.values(profile.skills).flat().join(', ');
  }

  return String(profile.skills);
}

function localAnswer(q) {
  const s = q.toLowerCase();

  if (s.includes('available') || s.includes('work') || s.includes('freelance')) {
    return 'Yes. Fahid is currently available for work, freelance projects, and collaboration.';
  }

  if (s.includes('skill') || s.includes('technology') || s.includes('stack')) {
    return `Fahid works with ${getSkillsText()}.`;
  }

  if (s.includes('project') || s.includes('built')) {
    return `Fahid has built ${projects.length}+ projects including ${projects
      .slice(0, 6)
      .map((p) => p.title)
      .join(', ')}.`;
  }

  if (s.includes('contact') || s.includes('email') || s.includes('phone')) {
    return `You can contact Fahid at ${profile.email} or WhatsApp ${
      profile.displayPhone || profile.phone
    }.`;
  }

  if (s.includes('education') || s.includes('study') || s.includes('university')) {
    return 'Fahid is studying B.Sc. in Computer Science & Engineering at Daffodil International University, Dhaka, Bangladesh.';
  }

  return 'Fahid is a MERN Stack Developer from Dhaka, Bangladesh. Ask about his skills, projects, education, availability, or contact details.';
}

export default function AISection() {
  const [q, setQ] = useState('');
  const [answer, setAnswer] = useState(
    'Ask me about Fahid’s projects, skills, education, contact, or availability.'
  );

  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState('');
  const [improved, setImproved] = useState('');

  const found = useMemo(() => {
    const cleanQuery = filter
      .toLowerCase()
      .replace('show me', '')
      .replace('projects', '')
      .trim();

    if (!cleanQuery) return projects.slice(0, 4);

    return projects.filter((p) => {
      const text = `
        ${p.title || ''}
        ${p.shortStack || ''}
        ${Array.isArray(p.stack) ? p.stack.join(' ') : p.stack || ''}
        ${p.description || ''}
        ${Array.isArray(p.challenges) ? p.challenges.join(' ') : ''}
        ${Array.isArray(p.futurePlans) ? p.futurePlans.join(' ') : ''}
      `.toLowerCase();

      return text.includes(cleanQuery);
    });
  }, [filter]);

  function ask() {
    if (!q.trim()) {
      setAnswer('Please type a question first.');
      return;
    }

    setAnswer(localAnswer(q));
  }

  function improve() {
    const text = message.trim();

    if (!text) {
      setImproved('Write a rough message first.');
      return;
    }

    setImproved(
      `Hello Fahid,\n\nI hope you are doing well. I am interested in discussing a possible project or collaboration with you. ${text}\n\nPlease let me know when you are available to talk.\n\nThank you.`
    );
  }

  return (
    <section className="ai-sec" id="ai">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-label">AI Powered</span>
          <span className="eyebrow-line"></span>
        </div>

        <h2 className="sec-heading">
          Smart <span className="hi">Portfolio</span>
        </h2>

        <div className="ai-grid">
          <div className="ai-card">
            <div className="ai-title">AI Portfolio Assistant</div>

            <div className="ai-sub">
              Visitors can ask about skills, projects, education, contact, and availability.
            </div>

            <div className="ai-box">{answer}</div>

            <div className="ai-row">
              <input
                className="ai-input"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Example: What projects has Fahid built?"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') ask();
                }}
              />

              <button className="btn btn-primary" onClick={ask}>
                Ask
              </button>
            </div>
          </div>

          <div className="ai-card">
            <div className="ai-title">AI Project Finder</div>

            <div className="ai-sub">
              Search like: Next.js, MongoDB, JWT, React, Tailwind.
            </div>

            <input
              className="ai-input"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search Next.js, MongoDB, JWT..."
            />

            <div style={{ marginTop: '1rem', display: 'grid', gap: '.6rem' }}>
              {found.length > 0 ? (
                found.slice(0, 5).map((p) => (
                  <a key={p.slug} className="tag" href={`/projects/${p.slug}`}>
                    {p.title} ·{' '}
                    {p.shortStack ||
                      (Array.isArray(p.stack) ? p.stack.join(' · ') : p.stack)}
                  </a>
                ))
              ) : (
                <div className="ai-box">No matching project found.</div>
              )}
            </div>
          </div>

          <div className="ai-card">
            <div className="ai-title">AI Resume Summary</div>

            <div className="ai-sub">
              Professional summary generated from profile data.
            </div>

            <div className="ai-box">
              {profile.bio}
              {'\n\n'}
              Main stack: React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, JWT Auth.
              {'\n'}
              Education: CSE at Daffodil International University.
            </div>
          </div>

          <div className="ai-card">
            <div className="ai-title">AI Contact Message Helper</div>

            <div className="ai-sub">
              Write rough text, then make it professional before sending.
            </div>

            <textarea
              className="ai-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="I want to make a website for my business..."
            />

            <button className="btn btn-primary" onClick={improve}>
              Improve Message
            </button>

            {improved && (
              <div
                className="ai-box"
                style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}
              >
                {improved}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
import { profile } from '../../data/profile';

export default function SkillsSection() {
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
                <li className={index === 0 ? 'on' : ''} key={skillGroup.title}>
                  {String(index + 1).padStart(2, '0')} {skillGroup.title}
                </li>
              ))}
            </ul>
          </div>

          <div className="skills-content">
            {profile.skills.map((skillGroup, index) => (
              <div className="sg" id={`sg${index + 1}`} key={skillGroup.title}>
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
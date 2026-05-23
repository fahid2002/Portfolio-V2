import { profile } from '../../data/profile';

export default function EducationSection() {
  return (
    <section className="edu-sec" id="education">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-label">Education</span>
          <span className="eyebrow-line"></span>
        </div>

        <h2 className="sec-heading" style={{ marginBottom: '2.5rem' }}>
          Academic <span className="hi">Background</span>
        </h2>

        <div className="edu-timeline">
          {profile.education.map((education) => (
            <div className="edu-item" key={education.degree}>
              <div className="edu-year">{education.year}</div>

              <div>
                <div className="edu-degree">{education.degree}</div>
                <div className="edu-institution">{education.institution}</div>
                <div className="edu-detail">{education.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
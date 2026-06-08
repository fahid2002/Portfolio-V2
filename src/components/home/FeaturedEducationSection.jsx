import { profile } from '../../data/profile';

export default function FeaturedEducationSection() {
  // Show only the first (current) education item
  const featuredEducation = profile.education[0];

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
          <div className="edu-item" key={featuredEducation.degree}>
            <div className="edu-year">{featuredEducation.year}</div>

            <div>
              <div className="edu-degree">{featuredEducation.degree}</div>
              <div className="edu-institution">{featuredEducation.institution}</div>
              <div className="edu-detail">{featuredEducation.detail}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

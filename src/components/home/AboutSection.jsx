import { profile } from '../../data/profile';

export default function AboutSection() {
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

            <div className="about-stats">
              <div className="stat-box">
                <div className="stat-n">10+</div>
                <div className="stat-l">Projects</div>
              </div>

              <div className="stat-box">
                <div className="stat-n">14+</div>
                <div className="stat-l">Technologies</div>
              </div>

              <div className="stat-box">
                <div className="stat-n">2+</div>
                <div className="stat-l">Yrs Building</div>
              </div>
            </div>
          </div>

          <div>
            <div className="about-panel">
              <div className="about-quote">
                &quot;If you don&apos;t take risks, you can&apos;t create a future.&quot;
              </div>

              <div className="about-quote-attr">— Monkey D. Luffy</div>

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
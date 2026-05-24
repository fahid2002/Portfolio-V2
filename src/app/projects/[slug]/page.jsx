import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { projects } from '../../../data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project ? `${project.title} — Fahid Hasan` : 'Project — Fahid Hasan',
    description: project
      ? project.description
      : 'Project details page for Fahid Hasan portfolio.',
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const stackList = Array.isArray(project.stack)
    ? project.stack
    : String(project.stack || project.shortStack || '')
        .split('·')
        .map((item) => item.trim())
        .filter(Boolean);

  const challenges = Array.isArray(project.challenges)
    ? project.challenges
    : project.challenges
      ? [project.challenges]
      : [
          'Planning the project structure clearly.',
          'Making the UI responsive for different devices.',
          'Keeping the design consistent with the portfolio style.',
        ];

  const futurePlans = Array.isArray(project.futurePlans)
    ? project.futurePlans
    : project.future
      ? [project.future]
      : [
          'Improve performance and user experience.',
          'Add more advanced features.',
          'Make the project more scalable and production-ready.',
        ];

  return (
    <>
      <Navbar />

      <main className="project-detail">
        <div className="container">
          <Link href="/#projects" className="back-link">
            ← Back to projects
          </Link>

          <div className="detail-grid">
            <div className="detail-card">
              <div className="modal-label">PROJECT DETAILS</div>

              <h1 className="detail-title">{project.title}</h1>

              <div className="modal-stack">
                {project.shortStack || stackList.join(' · ')}
              </div>

              <div className="detail-section">
                <h3>Main Technology Stack Used</h3>

                <div className="about-chips">
                  {stackList.map((stack) => (
                    <span className="tag" key={stack}>
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              <div className="detail-section">
                <h3>Brief Description</h3>
                <p>{project.description}</p>
              </div>

              <div className="detail-section">
                <h3>Live Project Link</h3>

                {project.live ? (
                  <a
                    href={project.live}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Live Project ↗
                  </a>
                ) : (
                  <p>Live project link is not available yet.</p>
                )}
              </div>

              <div className="detail-section">
                <h3>GitHub Repository Link</h3>

                {project.github ? (
                  <a
                    href={project.github}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository →
                  </a>
                ) : (
                  <p>GitHub repository link is not available yet.</p>
                )}
              </div>

              <div className="detail-section">
                <h3>Challenges Faced While Developing</h3>

                <ul>
                  {challenges.map((challenge) => (
                    <li key={challenge}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>Potential Improvements & Future Plans</h3>

                <ul>
                  {futurePlans.map((plan) => (
                    <li key={plan}>{plan}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside>
              {project.image ? (
                <div className="detail-thumb">
                  <img src={project.image} alt={project.title} />
                </div>
              ) : (
                <div className="detail-thumb">
                  <span className="pj-thumb-ph">{project.title}</span>
                </div>
              )}

              <div className="about-panel">
                <div className="about-quote">AI Summary</div>

                <p className="about-p">
                  This project shows Fahid’s practical ability to plan, design,
                  and build useful software with a clean interface and real-world
                  development logic.
                </p>

                <div className="about-chips">
                  {stackList.map((stack) => (
                    <span className="tag" key={stack}>
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { projects, designWorks } from '../../data/projects';

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const groups = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  // Null-safe check for video file extensions
  const isVideoFile = (src = '') => {
    if (!src) return false;
    const cleanSrc = src.toLowerCase().split('?')[0];
    return cleanSrc.endsWith('.mp4') || cleanSrc.endsWith('.webm');
  };

  return (
    <section className="projects-sec" id="projects">
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-label">Projects</span>
          <span className="eyebrow-line"></span>
        </div>

        <h2 className="sec-heading" style={{ marginBottom: '2.5rem' }}>
          What I&apos;ve <span className="hi">Built</span>
        </h2>

        {Object.entries(groups).map(([category, list]) => (
          <div className="pc" key={category}>
            <div className="pc-head">
              <span className="pc-icon">
                {category === 'Web Projects'
                  ? '🌐'
                  : category === 'Java Desktop Apps'
                    ? '☕'
                    : '📡'}
              </span>
              <span className="pc-title">{category}</span>
              <span className="pc-count">
                {String(list.length).padStart(2, '0')}
              </span>
              <span className="pc-line"></span>
            </div>

            <div className="pg">
              {list.map((project) => {
                const isVideo = isVideoFile(project.image);

                return (
                  <div className="pj-card" key={project.slug}>
                    <div className="pj-thumb">
                      {project.image ? (
                        isVideo ? (
                          mounted ? (
                            <video
                              src={project.image}
                              autoPlay
                              loop
                              muted
                              playsInline
                              preload="auto"
                              onError={(e) =>
                                console.error('Video failed to load:', project.image, e)
                              }
                            />
                          ) : (
                            <div className="design-video-placeholder"></div>
                          )
                        ) : (
                          <img src={project.image} alt={project.title} />
                        )
                      ) : (
                        <div className="pj-thumb-ph">{project.title}</div>
                      )}
                    </div>

                    <div className="pj-body">
                      <div className="pj-name">{project.title}</div>
                      <div className="pj-stack">{project.shortStack}</div>
                      <div className="pj-desc">{project.description}</div>

                      <div className="pj-links">
                        {project.live && (
                          <a
                            href={project.live}
                            className="pj-link live"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live ↗
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            className="pj-link gh"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub
                          </a>
                        )}
                        <Link
                          href={`/projects/${project.slug}`}
                          className="pj-link details"
                        >
                          Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* ── Figma Designs & Posters ── */}
        <div className="pc">
          <div className="pc-head">
            <span className="pc-icon">🎨</span>
            <span className="pc-title">Figma Designs & Posters</span>
            <span className="pc-line"></span>
          </div>

          <div className="design-grid">
            {designWorks.map((design) => {
              const isVideo = isVideoFile(design.image);

              return (
                <div className="design-item" key={design.title}>
                  <div className="design-media">
                    {design.image ? (
                      isVideo ? (
                        mounted ? (
                          <video
                            src={design.image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            onError={(e) =>
                              console.error('Design video failed to load:', design.image, e)
                            }
                          />
                        ) : (
                          <div className="design-video-placeholder"></div>
                        )
                      ) : (
                        <img src={design.image} alt={design.title} />
                      )
                    ) : (
                      <div className="design-video-placeholder"></div>
                    )}
                  </div>

                  <div className="design-label">{design.title}</div>
                  <div className="design-sub">{design.type}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

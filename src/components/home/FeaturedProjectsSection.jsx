'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { projects } from '../../data/projects';

export default function FeaturedProjectsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Featured project slugs
  const featuredSlugs = ['docappoint', 'tilehaus', 'keenkeeper'];
  const featuredProjects = projects.filter((p) => featuredSlugs.includes(p.slug));

  // Function to truncate description
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

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
          <span className="eyebrow-label">Featured Projects</span>
          <span className="eyebrow-line"></span>
        </div>

        <h2 className="sec-heading" style={{ marginBottom: '2.5rem' }}>
          What I&apos;ve <span className="hi">Built</span>
        </h2>

        <div className="pc">
          <div className="pc-head">
            <span className="pc-icon">🌐</span>
            <span className="pc-title">Featured Projects</span>
            <span className="pc-count">{String(featuredProjects.length).padStart(2, '0')}</span>
            <span className="pc-line"></span>
          </div>

          <div className="pg">
            {featuredProjects.map((project) => {
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
                    <div className="pj-desc">{truncateDescription(project.description)}</div>

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

          {/* View More Projects Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
            <Link
              href="/projects"
              className="pj-link live"
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '0.85rem',
                letterSpacing: '0.07em',
              }}
            >
              View More Projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

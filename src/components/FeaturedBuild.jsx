import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { SectionHeading } from './SectionHeading.jsx';

export function FeaturedBuild({ build }) {
  return (
    <section className="page-section featured-build" id="featured-build">
      <SectionHeading eyebrow="Featured build" title={build.title}>
        <p>{build.summary}</p>
      </SectionHeading>

      <div className="featured-build__layout">
        <article className="featured-build__card">
          <div className="featured-build__badge">
            <ShieldCheck size={18} aria-hidden="true" />
            Production-shaped AI platform proof
          </div>
          <p>{build.problem}</p>
          <ul>
            {build.proofPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <div className="project-grid" aria-label="Featured project proof points">
          {build.projects.map((project) => (
            <article className="project-card" key={project.name}>
              <span>{project.label}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              {project.href ? (
                <a className="text-link" href={project.href}>
                  View proof <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

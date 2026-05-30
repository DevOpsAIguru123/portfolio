import { SectionHeading } from './SectionHeading.jsx';

export function Experience({ experience }) {
  return (
    <section className="page-section" id="experience">
      <SectionHeading eyebrow="Experience" title="Enterprise AI, cloud, SRE, and MLOps delivery">
        <p>Recent work emphasizes AKS, Databricks, Azure AI, LLM gateways, observability, and platform reliability.</p>
      </SectionHeading>
      <div className="timeline">
        {experience.map((role) => (
          <article className="timeline-card" key={`${role.company}-${role.dates}`}>
            <div>
              <p className="timeline-card__dates">{role.dates}</p>
              <h3>{role.role}</h3>
              <p className="timeline-card__company">{role.company} · {role.location}</p>
            </div>
            <ul>
              {role.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

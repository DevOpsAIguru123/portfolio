import { ArrowUpRight, Download, Mail } from 'lucide-react';

export function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">Available for AI platform, MLOps, SRE, and cloud infrastructure roles</p>
        <h1>{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="role-strip" aria-label="Target roles">
          <span>Target roles</span>
          <div>
            {profile.targetRoles.map((role) => (
              <strong key={role}>{role}</strong>
            ))}
          </div>
        </div>
        <div className="impact-snapshot" aria-label="Impact snapshot">
          <h2>Impact Snapshot</h2>
          <ul>
            {profile.impactSnapshot.map((impact) => (
              <li key={impact}>{impact}</li>
            ))}
          </ul>
        </div>
        <div className="hero__actions">
          <a className="button" href={`mailto:${profile.email}`}>
            <Mail size={18} aria-hidden="true" />
            Contact Vinod
          </a>
          <a className="button button--secondary" href={profile.links.resume}>
            <Download size={18} aria-hidden="true" />
            View Resume
          </a>
          <a className="text-link" href={profile.links.linkedin}>
            LinkedIn <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      <aside className="hero-card" aria-label="Career focus">
        <span className="hero-card__label">Platform focus</span>
        <strong>Secure AI systems that scale, observe, govern, and control cost.</strong>
        <div className="hero-card__chips">
          {['AKS', 'Databricks', 'LLM Gateway', 'OpenTelemetry', 'Terraform', 'GPU FinOps'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </aside>
    </section>
  );
}

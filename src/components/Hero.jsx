import { ArrowUpRight, Download, Mail } from 'lucide-react';

export function Hero({ profile }) {
  return (
    <section className="hero" id="top">
      <div className="hero__content">
        <p className="eyebrow">Available for AI platform, MLOps, SRE, and cloud infrastructure roles</p>
        <h1>{profile.name}</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__actions">
          <a className="button" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            Contact Vinod
          </a>
          <a className="button button--secondary" href={profile.links.resume}>
            <Download size={18} />
            View Resume
          </a>
          <a className="text-link" href={profile.links.linkedin}>
            LinkedIn <ArrowUpRight size={16} />
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

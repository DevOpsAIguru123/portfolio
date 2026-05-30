import { Award } from 'lucide-react';
import { SectionHeading } from './SectionHeading.jsx';

export function Certifications({ certifications }) {
  return (
    <section className="page-section">
      <SectionHeading eyebrow="Certifications" title="Validated cloud, AI, Kubernetes, and platform credentials" />
      <div className="cert-grid">
        {certifications.map((certification) => (
          <div className="cert-card" key={certification}>
            <Award size={18} aria-hidden="true" />
            <span>{certification}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

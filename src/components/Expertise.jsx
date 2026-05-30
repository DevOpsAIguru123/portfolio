import { SectionHeading } from './SectionHeading.jsx';

export function Expertise({ expertise }) {
  return (
    <section className="page-section" id="expertise">
      <SectionHeading eyebrow="Expertise" title="AI platform depth, organized for production delivery">
        <p>Capabilities span infrastructure, model operations, governance, observability, and release reliability.</p>
      </SectionHeading>
      <div className="expertise-grid">
        {expertise.map((group) => (
          <article className="expertise-card" key={group.name}>
            <h3>{group.name}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

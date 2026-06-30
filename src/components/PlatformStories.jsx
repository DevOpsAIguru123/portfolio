import { SectionHeading } from './SectionHeading.jsx';

export function PlatformStories({ stories }) {
  return (
    <section className="page-section" id="stories">
      <SectionHeading eyebrow="Platform stories" title="AI Platform Case Studies">
        <p>Each story connects a real platform problem to infrastructure action and business-visible outcome.</p>
      </SectionHeading>
      <div className="story-grid">
        {stories.map((story) => (
          <article className="story-card" key={story.title}>
            <h3>{story.title}</h3>
            <p><strong>Problem:</strong> {story.problem}</p>
            <p><strong>Action:</strong> {story.action}</p>
            <p><strong>Outcome:</strong> {story.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

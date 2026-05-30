export function Metrics({ stats }) {
  return (
    <section className="metrics" aria-label="Career impact metrics">
      {stats.map((stat) => (
        <article className="metric-card" key={`${stat.value}-${stat.label}`}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
          <p>{stat.detail}</p>
        </article>
      ))}
    </section>
  );
}

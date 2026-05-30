export function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <div className="section-heading__body">{children}</div> : null}
    </div>
  );
}

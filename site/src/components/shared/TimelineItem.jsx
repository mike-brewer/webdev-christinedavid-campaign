function TimelineItem({ dates, title, role, summary, image, imageAlt, highlights }) {
  return (
    <article className="timeline-item">
      <p className="timeline-dates">{dates}</p>
      <div className="timeline-content">
        <h3>{title}</h3>
        <p className="timeline-role">{role}</p>
        <p>{summary}</p>
        {highlights?.length ? (
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
        {image ? (
          <img src={image} alt={imageAlt} loading="lazy" className="timeline-image" />
        ) : null}
      </div>
    </article>
  )
}

export default TimelineItem

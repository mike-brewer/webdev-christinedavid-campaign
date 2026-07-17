function PriorityCard({ title, summary, commitments }) {
  return (
    <article className="priority-card">
      <h3>{title}</h3>
      <p>{summary}</p>
      {commitments?.length ? (
        <ul>
          {commitments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}

export default PriorityCard

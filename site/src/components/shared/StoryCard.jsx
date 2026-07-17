import { Link } from 'react-router-dom'

function StoryCard({ slug, eyebrow, title, summary, image, imageAlt }) {
  return (
    <article className="story-card" id={slug}>
      {image ? <img src={image} alt={imageAlt} loading="lazy" /> : null}
      <div className="story-card-body">
        <p className="eyebrow">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{summary}</p>
        <Link to="/contact" className="text-link">
          Share your perspective
        </Link>
      </div>
    </article>
  )
}

export default StoryCard

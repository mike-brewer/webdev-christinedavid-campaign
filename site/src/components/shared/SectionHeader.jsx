function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <header className={`section-header align-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  )
}

export default SectionHeader

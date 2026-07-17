import PrimaryButton from './PrimaryButton.jsx'

function CalloutBanner({ title, description, ctaLabel, ctaTo }) {
  return (
    <section className="callout-banner" aria-label={title}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <PrimaryButton to={ctaTo}>{ctaLabel}</PrimaryButton>
    </section>
  )
}

export default CalloutBanner

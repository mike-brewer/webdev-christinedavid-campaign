import childhoodImage from '../assets/images/christine-childhood-stage.svg'
import portraitImage from '../assets/images/christine-portrait.svg'
import speakingImage from '../assets/images/christine-speaking.svg'
import ImageWithCaption from '../components/shared/ImageWithCaption.jsx'
import QuoteBlock from '../components/shared/QuoteBlock.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

const pathSteps = [
  'Resident',
  'Volunteer',
  'Committee Member',
  'Committee Vice Chair',
  'Nonprofit Board Member',
  'Community Leader',
  'Council Candidate',
]

function MeetChristinePage() {
  usePageMeta({
    title: 'Meet Christine David | Atherton City Council 2026',
    description:
      'Learn about Christine David, her background, and her path from resident volunteer to Atherton City Council candidate.',
  })

  return (
    <div className="meet-page">
      <section className="container section page-hero split-section meet-hero">
        <div className="meet-hero-copy">
          <p className="eyebrow">MEET CHRISTINE</p>
          <h1>A longtime Atherton resident with a lifelong belief in public service.</h1>
          <p>
            Christine David has built her civic record through committee service, nonprofit work,
            and practical collaboration with residents and Town leadership.
          </p>
        </div>
        <div className="hero-image-frame meet-hero-image">
          <img src={portraitImage} alt="Portrait placeholder for Christine David" />
        </div>
      </section>

      <section className="container section meet-section meet-bio">
        <SectionHeader
          title="Atherton Has Been Home"
          description="For more than two decades, Christine David has called Atherton home. During that time, she has served on Town committees, nonprofit boards, fundraising efforts, emergency-preparedness initiatives, and community programs."
        />
        <div className="meet-bio-panel">
          <p>
            Her record reflects a simple belief: residents should take an active role in caring
            for the place they call home.
          </p>
        </div>
      </section>

      <section className="container section split-section meet-section meet-tradition">
        <div className="meet-tradition-copy">
          <SectionHeader title="A Tradition of Speaking Up" />
          <p>
            Christine&apos;s grandmother taught her from an early age that a strong voice should be used
            in service to others. At six years old, Christine appeared at a charity event in Sonoma,
            an early lesson in speaking with confidence, preparation, and purpose.
          </p>
        </div>
        <div className="image-stack meet-tradition-media">
          <ImageWithCaption
            src={childhoodImage}
            alt="Childhood stage appearance placeholder"
            caption="Early public speaking experience"
          />
          <ImageWithCaption
            src={speakingImage}
            alt="Professional speaking placeholder"
            caption="Communication developed through professional and civic work"
          />
        </div>
      </section>

      <section className="container section meet-section meet-professional">
        <SectionHeader title="Professional Background" />
        <div className="feature-grid meet-skill-grid">
          <article>
            <h3>International business</h3>
          </article>
          <article>
            <h3>Corporate marketing</h3>
          </article>
          <article>
            <h3>Public speaking</h3>
          </article>
          <article>
            <h3>Executive communication</h3>
          </article>
          <article>
            <h3>Leadership and organizational work</h3>
          </article>
        </div>
        <p className="narrow-content meet-professional-summary">
          Christine&apos;s professional career has included international trade, marketing, public
          speaking, and executive communications coaching. She has worked with business leaders,
          civic institutions, and senior professionals who needed to communicate clearly in
          high-stakes environments.
        </p>
      </section>

      <section className="container section meet-section">
        <SectionHeader title="Her Path Into Civic Service" />
        <ol className="progression-path" aria-label="Path into civic service">
          {pathSteps.map((step, index) => (
            <li key={step} className="progression-path-item">
              <span className="path-step-number" aria-hidden="true">
                {index + 1}
              </span>
              <span className="path-step-label">{step}</span>
              {index < pathSteps.length - 1 ? (
                <span className="path-step-connector" aria-hidden="true"></span>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="container section narrow-content meet-section meet-statement">
        <QuoteBlock
          quote='"Atherton is more than where I live. It is a community I have invested in for more than twenty years. I am running because I believe experience matters, resident voices matter, and public service should produce meaningful results."'
          attribution="Christine David"
        />
      </section>
    </div>
  )
}

export default MeetChristinePage

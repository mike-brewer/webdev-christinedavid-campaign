import portraitImage from '../assets/images/christine-portrait.svg'
import CalloutBanner from '../components/shared/CalloutBanner.jsx'
import PriorityCard from '../components/shared/PriorityCard.jsx'
import PrimaryButton from '../components/shared/PrimaryButton.jsx'
import QuoteBlock from '../components/shared/QuoteBlock.jsx'
import SecondaryButton from '../components/shared/SecondaryButton.jsx'
import StatCard from '../components/shared/StatCard.jsx'
import { civicRecord } from '../data/civicRecord.js'
import {
  civicRecordPreview,
  credibilityStats,
  homePriorityPreview,
  siteData,
} from '../data/siteData.js'
import usePageMeta from '../hooks/usePageMeta.js'

function HomePage() {
  usePageMeta({
    title: 'Christine David for Atherton City Council',
    description:
      'Christine David for Atherton City Council 2026: longtime civic service, clear priorities, and community stewardship.',
  })

  const featuredStory = civicRecord.find((item) => item.title === 'Friends of Atherton Library')

  return (
    <>
      <section className="hero-section container home-hero">
        <div className="hero-copy">
          <p className="eyebrow">ATHERTON CITY COUNCIL - NOVEMBER 2026</p>
          <h1>Christine David</h1>
          <p className="hero-tagline">{siteData.tagline}</p>
          <p>
            Christine has spent more than two decades serving Atherton through its committees,
            civic organizations, library, emergency-preparedness efforts, and community
            institutions.
          </p>
          <p>
            She is running to bring that experience to the Town Council and ensure that residents
            have a meaningful voice in Atherton&apos;s future.
          </p>
          <div className="button-row">
            <PrimaryButton to="/meet-christine">Meet Christine</PrimaryButton>
            <SecondaryButton to="/priorities">Explore Her Priorities</SecondaryButton>
          </div>
        </div>

        <div className="hero-image-frame">
          <img
            src={portraitImage}
            alt="Portrait placeholder for Christine David campaign"
            width="600"
            height="450"
          />
        </div>
      </section>

      <section
        className="container section stat-grid home-section home-stats"
        aria-label="Campaign highlights"
      >
        {credibilityStats.map((item) => (
          <StatCard key={item.label} value={item.value} label={item.label} />
        ))}
      </section>

      <section className="container section home-section home-content-section">
        <header className="section-header">
          <p className="eyebrow">WHY I&apos;M RUNNING</p>
          <h2>After years of advising the Town, Christine is ready to help make its decisions.</h2>
          <p className="section-description">
            Christine has spent years studying local issues, serving on committees, organizing
            community programs, and working alongside residents and Town leaders.
          </p>
          <p>
            Those experiences taught her that public participation must be more than a formality.
            She is running to bring preparation, transparency, and respect for resident input
            directly to the Council.
          </p>
        </header>

        <QuoteBlock
          quote='"I have found it difficult to establish real change without being a member of our Town Council."'
          attribution="Christine David"
        />

        <PrimaryButton to="/why-im-running">Read Why Christine Is Running</PrimaryButton>
      </section>

      <section className="container section home-section home-content-section">
        <header className="section-header">
          <p className="eyebrow">PRIORITY PREVIEW</p>
          <h2>Stewardship, preparedness, and public trust.</h2>
        </header>
        <div className="priority-grid">
          {homePriorityPreview.map((item) => (
            <PriorityCard key={item.title} title={item.title} summary={item.summary} />
          ))}
        </div>
        <PrimaryButton to="/priorities">View All Priorities</PrimaryButton>
      </section>

      <section className="container section home-section home-content-section">
        <header className="section-header">
          <p className="eyebrow">CIVIC RECORD</p>
          <h2>A record built over decades, not during an election season.</h2>
        </header>
        <div className="timeline-preview">
          {civicRecordPreview.map((item) => (
            <article key={item.title} className="timeline-preview-card">
              <p className="timeline-dates">{item.dates}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
        <PrimaryButton to="/civic-record">Explore Christine&apos;s Civic Record</PrimaryButton>
      </section>

      <section className="container section split-section home-section home-content-section">
        <div>
          <p className="eyebrow">FEATURED STORY</p>
          <h2>Helping build a civic center designed for the whole community</h2>
          <p>
            From helping shape the Town Center and library to leading programming through the
            Friends of Atherton Library, Christine has worked to make Atherton&apos;s civic institutions
            active parts of community life.
          </p>
          <PrimaryButton to="/atherton-stories">Read Atherton Stories</PrimaryButton>
        </div>
        {featuredStory?.image ? (
          <img
            src={featuredStory.image}
            alt="Library and civic center story image placeholder"
            loading="lazy"
          />
        ) : null}
      </section>

      <section className="container section home-section">
        <CalloutBanner
          title="Have a question or concern about Atherton?"
          description="Christine wants to hear from residents about the issues affecting their neighborhoods and the future of the Town."
          ctaLabel="Contact Christine"
          ctaTo="/contact"
        />
      </section>
    </>
  )
}

export default HomePage

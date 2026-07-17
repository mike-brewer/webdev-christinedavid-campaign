import ImageWithCaption from '../components/shared/ImageWithCaption.jsx'
import QuoteBlock from '../components/shared/QuoteBlock.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import StoryCard from '../components/shared/StoryCard.jsx'
import { athertonStories } from '../data/athertonStories.js'
import usePageMeta from '../hooks/usePageMeta.js'

function AthertonStoriesPage() {
  usePageMeta({
    title: 'Atherton Stories | Christine David',
    description:
      'Visual stories about Christine David\'s community work in Atherton, from parks to preparedness to library programming.',
  })

  return (
    <>
      <section className="container section page-hero narrow-content">
        <p className="eyebrow">ATHERTON STORIES</p>
        <h1>Community work told through places, people, and local institutions.</h1>
        <p>
          These stories focus on collaboration and long-term stewardship rather than campaign
          slogans.
        </p>
      </section>

      <section className="container section story-grid">
        {athertonStories.map((story) => (
          <article key={story.slug} className="story-feature">
            <SectionHeader eyebrow={story.eyebrow} title={story.title} />
            <ImageWithCaption src={story.image} alt={story.imageAlt} caption={story.caption} />
            <p>{story.summary}</p>
            <p>{story.narrative}</p>
            <QuoteBlock quote={`"${story.quote}"`} />
            <p className="story-outcome">
              <strong>Outcome:</strong> {story.outcome}
            </p>
          </article>
        ))}
      </section>

      <section className="container section">
        <SectionHeader
          title="Story Overview"
          description="Use these cards as a quick index for residents browsing campaign priorities and service history."
        />
        <div className="story-card-grid">
          {athertonStories.map((story) => (
            <StoryCard key={story.slug} {...story} />
          ))}
        </div>
      </section>
    </>
  )
}

export default AthertonStoriesPage

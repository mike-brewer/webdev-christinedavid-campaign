import QuoteBlock from '../components/shared/QuoteBlock.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

const principles = [
  'Listen before deciding',
  'Prepare before voting',
  'Respect resident participation',
  'Explain decisions clearly',
  'Protect long-term community interests',
  'Treat public service as stewardship',
]

function WhyRunningPage() {
  usePageMeta({
    title: "Why I'm Running | Christine David",
    description:
      'Christine David explains why she is running for Atherton City Council after years of civic advisory work.',
  })

  return (
    <>
      <section className="container section page-hero narrow-content why-running-hero">
        <p className="eyebrow">WHY I&apos;M RUNNING</p>
        <h1>After years of advising the Town, I am ready to serve from the Council.</h1>
        <p>
          Christine&apos;s decision to run is the result of years spent inside Atherton&apos;s civic
          process, not a sudden interest in public office.
        </p>
      </section>

      <section className="container section narrow-content">
        <SectionHeader title="The Limits of Advisory Service" />
        <p>
          Advisory committees can provide expertise, resident perspective, and careful preparation.
          But their value depends on whether their work receives meaningful consideration.
        </p>
        <p>
          Christine has researched issues, attended meetings, contributed to proposals, heard
          resident concerns, and served in leadership positions. Those experiences also showed where
          committee recommendations can lose momentum before final decisions are made.
        </p>
      </section>

      <section className="container section narrow-content">
        <SectionHeader title="A Defining Experience" />
        <p>
          On the Park and Recreation Committee, members invested substantial time evaluating the
          dog-park proposal and shaping a detailed recommendation. That work clarified how limited
          committee influence can be when recommendations are not advanced with urgency.
        </p>
        <p>
          The takeaway was not frustration, it was clarity: some meaningful outcomes require a
          Council vote.
        </p>
      </section>

      <section className="container section narrow-content">
        <SectionHeader title="What Council Service Requires" align="center" />
        <div className="feature-grid principles-grid">
          {principles.map((principle) => (
            <article key={principle}>
              <h3>{principle}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="container section narrow-content">
        <SectionHeader title="Why Now" />
        <p>
          Christine has served across parks, transportation, emergency preparedness, civic
          construction, fundraising, and library programming.
        </p>
        <p>
          She understands how Atherton&apos;s institutions work, where collaboration succeeds, and
          where communication can improve. She is running now because she is prepared to use that
          experience where it can have the greatest impact.
        </p>
        <QuoteBlock
          quote='"Prepared public service starts with listening, continues with clear process, and ends with accountable decisions."'
          attribution="Christine David"
        />
      </section>
    </>
  )
}

export default WhyRunningPage

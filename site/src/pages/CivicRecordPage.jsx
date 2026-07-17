import SectionHeader from '../components/shared/SectionHeader.jsx'
import TimelineItem from '../components/shared/TimelineItem.jsx'
import { civicRecord } from '../data/civicRecord.js'
import usePageMeta from '../hooks/usePageMeta.js'

function CivicRecordPage() {
  usePageMeta({
    title: "Christine David's Record of Service in Atherton",
    description:
      'A chronological civic record of committee service, nonprofit leadership, and community work.',
  })

  return (
    <>
      <section className="container section page-hero narrow-content">
        <p className="eyebrow">CIVIC RECORD</p>
        <h1>A chronology of service across Atherton committees and community institutions.</h1>
      </section>

      <section className="container section">
        <SectionHeader
          title="Timeline"
          description="This timeline is a structured first pass and includes clearly marked items that need campaign verification before publication."
        />
        <div className="timeline-list" aria-label="Civic service timeline">
          {civicRecord.map((entry) => (
            <div key={`${entry.title}-${entry.dates}`}>
              {entry.needsVerification ? (
                <p className="verification-note" role="note">
                  Verification needed: representation details are pending confirmation.
                </p>
              ) : null}
              <TimelineItem {...entry} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CivicRecordPage

import PriorityCard from '../components/shared/PriorityCard.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import { priorities } from '../data/priorities.js'
import usePageMeta from '../hooks/usePageMeta.js'

function PrioritiesPage() {
  usePageMeta({
    title: "Christine David's Priorities for Atherton",
    description:
      'Review Christine David\'s priorities for resident participation, neighborhood character, preparedness, and community institutions.',
  })

  return (
    <>
      <section className="container section page-hero narrow-content">
        <p className="eyebrow">PRIORITIES</p>
        <h1>A practical agenda focused on stewardship, preparedness, and trust.</h1>
        <p>
          These priorities reflect long-term community concerns and Christine&apos;s commitment to
          transparent local governance.
        </p>
      </section>

      <section className="container section">
        <SectionHeader
          title="Policy priorities"
          description="This first-pass platform uses placeholder policy language that must be reviewed by the campaign before publication."
        />
        <div className="priority-list">
          {priorities.map((priority) => (
            <PriorityCard
              key={priority.id}
              title={priority.title}
              summary={priority.summary}
              commitments={priority.commitments}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default PrioritiesPage

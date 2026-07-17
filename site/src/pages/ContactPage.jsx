import ContactForm from '../components/shared/ContactForm.jsx'
import NewsletterForm from '../components/shared/NewsletterForm.jsx'
import SectionHeader from '../components/shared/SectionHeader.jsx'
import { siteData } from '../data/siteData.js'
import usePageMeta from '../hooks/usePageMeta.js'

function ContactPage() {
  usePageMeta({
    title: 'Contact Christine David | Atherton City Council 2026',
    description: 'Contact Christine David to share local concerns, ideas, and priorities for Atherton.',
  })

  return (
    <>
      <section className="container section page-hero narrow-content">
        <p className="eyebrow">CONTACT</p>
        <h1>Christine wants to hear from Atherton residents.</h1>
        <p>
          Share a concern, ask a question, or tell Christine what you believe the Town Council
          should prioritize.
        </p>
      </section>

      <section className="container section contact-layout narrow-content">
        <div className="contact-form-card">
          <SectionHeader title="Send a message" />
          <ContactForm />
        </div>

        <div className="contact-secondary-block">
          <SectionHeader title="Stay Updated" />
          <NewsletterForm />

          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <p>
              Email: <a href={`mailto:${siteData.campaignEmail}`}>{siteData.campaignEmail}</a>
            </p>
            <p>Phone: To be added</p>
            <p>Social links: To be added</p>
          </div>

          <div className="contact-info-card">
            <h3>Campaign Disclaimer</h3>
            <p>
              Campaign committee name and legally required disclaimer will be added before launch.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage

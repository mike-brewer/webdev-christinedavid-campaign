import PrimaryButton from '../components/shared/PrimaryButton.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found | Christine David Campaign',
    description: 'The requested campaign page could not be found.',
  })

  return (
    <section className="container section page-hero narrow-content">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you requested is unavailable. Please use the main navigation to continue.</p>
      <PrimaryButton to="/">Return Home</PrimaryButton>
    </section>
  )
}

export default NotFoundPage

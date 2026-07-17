import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import ScrollToTop from './ScrollToTop.jsx'

function PageLayout() {
  return (
    <div className="site-shell">
      <ScrollToTop />
      <Header />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PageLayout

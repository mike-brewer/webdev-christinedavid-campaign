import { Link } from 'react-router-dom'
import { navLinks, siteData } from '../../data/siteData.js'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-heading">{siteData.candidateName}</p>
          <p>Candidate for Atherton City Council</p>
          <p>{siteData.electionDate}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p>
            Email: <a href={`mailto:${siteData.campaignEmail}`}>{siteData.campaignEmail}</a>
          </p>
          <p className="fine-print">
            Campaign disclaimer and committee information to be added before
            publication.
          </p>
          <p className="fine-print">Copyright {year} Christine David Campaign.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

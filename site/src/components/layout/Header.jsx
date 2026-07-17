import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu.jsx'
import { navLinks, siteData } from '../../data/siteData.js'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'compact' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="campaign-brand" aria-label="Christine David campaign home">
          <span className="brand-name">{siteData.candidateName}</span>
          <span className="brand-subtitle">{siteData.office} 2026</span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-panel"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <MobileMenu links={navLinks} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  )
}

export default Header

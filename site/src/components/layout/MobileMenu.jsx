import { NavLink } from 'react-router-dom'

function MobileMenu({ links, isOpen, onClose }) {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} id="mobile-menu-panel">
      <nav aria-label="Mobile">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `mobile-link ${isActive ? 'active' : ''}`
                }
                onClick={onClose}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu

import { Link } from 'react-router-dom'

function SecondaryButton({ to, children, type = 'button', onClick }) {
  if (to) {
    return (
      <Link to={to} className="button secondary-button">
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className="button secondary-button">
      {children}
    </button>
  )
}

export default SecondaryButton

import { Link } from 'react-router-dom'

function PrimaryButton({ to, children, type = 'button', onClick }) {
  if (to) {
    return (
      <Link to={to} className="button primary-button">
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className="button primary-button">
      {children}
    </button>
  )
}

export default PrimaryButton

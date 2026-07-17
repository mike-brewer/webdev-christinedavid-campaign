import { useState } from 'react'

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      setMessage('Please enter an email address.')
      return
    }

    setMessage('This form is not connected yet. Updates workflow will be integrated later.')
    setEmail('')
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit} noValidate>
      <label htmlFor="newsletter-email">Receive occasional campaign updates.</label>
      <div className="newsletter-row">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />
        <button type="submit" className="button secondary-button">
          Stay Updated
        </button>
      </div>
      <p className="fine-print">
        Integration placeholder: connect this form to Mailchimp, Buttondown, ConvertKit, or a
        campaign-approved provider.
      </p>
      {message ? <p className="form-status" role="status">{message}</p> : null}
    </form>
  )
}

export default NewsletterForm

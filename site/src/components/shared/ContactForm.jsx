import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  phone: '',
  neighborhood: '',
  subject: '',
  message: '',
}

function ContactForm() {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Please enter your name.'
    if (!values.email.trim()) {
      nextErrors.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.subject.trim()) nextErrors.subject = 'Please include a subject.'
    if (!values.message.trim()) nextErrors.message = 'Please share your message.'
    return nextErrors
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('success')
    setValues(initialState)
  }

  const fieldError = (name) => errors[name]

  return (
    <form onSubmit={onSubmit} noValidate className="contact-form">
      <div className="form-grid">
        <label>
          <span className="field-label">
            Name <span className="required-marker" aria-hidden="true">*</span>
          </span>
          <input
            name="name"
            value={values.name}
            onChange={onChange}
            aria-invalid={Boolean(fieldError('name'))}
            aria-describedby={fieldError('name') ? 'error-name' : undefined}
            required
          />
          {fieldError('name') ? <span id="error-name">{fieldError('name')}</span> : null}
        </label>

        <label>
          <span className="field-label">
            Email <span className="required-marker" aria-hidden="true">*</span>
          </span>
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
            aria-invalid={Boolean(fieldError('email'))}
            aria-describedby={fieldError('email') ? 'error-email' : undefined}
            required
          />
          {fieldError('email') ? (
            <span id="error-email">{fieldError('email')}</span>
          ) : null}
        </label>

        <label>
          <span className="field-label">Phone (optional)</span>
          <input name="phone" value={values.phone} onChange={onChange} />
        </label>

        <label>
          <span className="field-label">Atherton neighborhood (optional)</span>
          <input name="neighborhood" value={values.neighborhood} onChange={onChange} />
        </label>

        <label>
          <span className="field-label">
            Subject <span className="required-marker" aria-hidden="true">*</span>
          </span>
          <input
            name="subject"
            value={values.subject}
            onChange={onChange}
            aria-invalid={Boolean(fieldError('subject'))}
            aria-describedby={fieldError('subject') ? 'error-subject' : undefined}
            required
          />
          {fieldError('subject') ? (
            <span id="error-subject">{fieldError('subject')}</span>
          ) : null}
        </label>

        <label className="message-field">
          <span className="field-label">
            Message <span className="required-marker" aria-hidden="true">*</span>
          </span>
          <textarea
            name="message"
            rows="6"
            value={values.message}
            onChange={onChange}
            aria-invalid={Boolean(fieldError('message'))}
            aria-describedby={fieldError('message') ? 'error-message' : undefined}
            required
          />
          {fieldError('message') ? (
            <span id="error-message">{fieldError('message')}</span>
          ) : null}
        </label>
      </div>

      <button type="submit" className="button primary-button">
        Send Message
      </button>

      {status === 'success' ? (
        <p className="form-status success" role="status">
          Thank you. The contact form is not connected yet. Please email Christine directly at
          campaign@example.com.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="form-status error" role="alert">
          Please correct the highlighted fields and try again.
        </p>
      ) : null}
    </form>
  )
}

export default ContactForm

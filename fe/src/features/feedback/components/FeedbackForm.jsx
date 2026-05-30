import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import { LOGGED_IN_USER } from '@/features/community/loggedInMockData'
import {
  FEEDBACK_FORM_COPY,
  FEEDBACK_MAJOR_OPTIONS,
  FEEDBACK_TYPE_OPTIONS,
  GOOGLE_FORM_URL,
  SATISFACTION_OPTIONS,
  validateFeedbackForm,
} from '../feedbackMockData'

function buildInitialForm(user, isLoggedIn) {
  const fullName = user?.fullName || (isLoggedIn ? LOGGED_IN_USER.displayName : '')
  const email = user?.email || (isLoggedIn ? LOGGED_IN_USER.email : '')

  return {
    email,
    fullName,
    studentId: '',
    major: '',
    feedbackType: '',
    satisfaction: '',
    content: '',
    attachment: null,
  }
}

export default function FeedbackForm({ backTo = '/community', backLabel = 'Quay lại' }) {
  const { user, isLoggedIn } = useAuth()
  const initialForm = useMemo(() => buildInitialForm(user, isLoggedIn), [user, isLoggedIn])

  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateFeedbackForm(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  if (submitted) {
    return (
      <div className="feedback-form">
        <div className="feedback-form__success">
          <span className="feedback-form__success-icon" aria-hidden="true">
            <CheckIcon />
          </span>
          <h1>Phản hồi của bạn đã được ghi nhận</h1>
          <p>Cảm ơn bạn đã chia sẻ ý kiến. Team SEHub sẽ xem xét và phản hồi nếu cần.</p>
          <Link to={backTo} className="feedback-form__success-link">
            {backLabel}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="feedback-form">
      <header className="feedback-form__hero">
        <Link to={backTo} className="feedback-form__back">
          <BackIcon />
          {backLabel}
        </Link>
        <h1>{FEEDBACK_FORM_COPY.title}</h1>
        <p>{FEEDBACK_FORM_COPY.description}</p>
        <p className="feedback-form__required-note">
          <span className="feedback-form__required">*</span> Bắt buộc
        </p>
      </header>

      <form className="feedback-form__body" onSubmit={handleSubmit} noValidate>
        <section className="feedback-field">
          <label className="feedback-field__label" htmlFor="feedback-email">
            Email <span className="feedback-form__required">*</span>
          </label>
          <input
            id="feedback-email"
            type="email"
            className="feedback-field__input"
            placeholder="name@example.com"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
          {errors.email && <p className="feedback-field__error">{errors.email}</p>}
        </section>

        <section className="feedback-field">
          <label className="feedback-field__label" htmlFor="feedback-name">
            Họ và tên <span className="feedback-form__required">*</span>
          </label>
          <input
            id="feedback-name"
            type="text"
            className="feedback-field__input"
            placeholder="Nhập họ tên của bạn"
            value={form.fullName}
            onChange={(event) => updateField('fullName', event.target.value)}
          />
          {errors.fullName && <p className="feedback-field__error">{errors.fullName}</p>}
        </section>

        <section className="feedback-field">
          <label className="feedback-field__label" htmlFor="feedback-student-id">
            Mã sinh viên
          </label>
          <input
            id="feedback-student-id"
            type="text"
            className="feedback-field__input"
            placeholder="VD: SE123456"
            value={form.studentId}
            onChange={(event) => updateField('studentId', event.target.value)}
          />
        </section>

        <section className="feedback-field">
          <p className="feedback-field__label">
            Chuyên ngành <span className="feedback-form__required">*</span>
          </p>
          <div className="feedback-field__choices">
            {FEEDBACK_MAJOR_OPTIONS.map((option) => (
              <label key={option} className="feedback-choice">
                <input
                  type="radio"
                  name="major"
                  value={option}
                  checked={form.major === option}
                  onChange={(event) => updateField('major', event.target.value)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.major && <p className="feedback-field__error">{errors.major}</p>}
        </section>

        <section className="feedback-field">
          <label className="feedback-field__label" htmlFor="feedback-type">
            Loại phản hồi <span className="feedback-form__required">*</span>
          </label>
          <select
            id="feedback-type"
            className="feedback-field__input"
            value={form.feedbackType}
            onChange={(event) => updateField('feedbackType', event.target.value)}
          >
            <option value="">Chọn loại phản hồi</option>
            {FEEDBACK_TYPE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.feedbackType && <p className="feedback-field__error">{errors.feedbackType}</p>}
        </section>

        <section className="feedback-field">
          <p className="feedback-field__label">
            Bạn đánh giá trải nghiệm SEHub như thế nào?{' '}
            <span className="feedback-form__required">*</span>
          </p>
          <div className="feedback-field__choices feedback-field__choices--stack">
            {SATISFACTION_OPTIONS.map(({ value, label }) => (
              <label key={value} className="feedback-choice">
                <input
                  type="radio"
                  name="satisfaction"
                  value={value}
                  checked={form.satisfaction === value}
                  onChange={(event) => updateField('satisfaction', event.target.value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
          {errors.satisfaction && <p className="feedback-field__error">{errors.satisfaction}</p>}
        </section>

        <section className="feedback-field">
          <label className="feedback-field__label" htmlFor="feedback-content">
            Nội dung phản hồi chi tiết <span className="feedback-form__required">*</span>
          </label>
          <textarea
            id="feedback-content"
            className="feedback-field__textarea"
            rows={6}
            placeholder="Mô tả chi tiết góp ý, lỗi gặp phải hoặc đề xuất của bạn..."
            value={form.content}
            onChange={(event) => updateField('content', event.target.value)}
          />
          {errors.content && <p className="feedback-field__error">{errors.content}</p>}
        </section>

        <section className="feedback-field">
          <p className="feedback-field__label">Đính kèm ảnh minh họa (Tùy chọn)</p>
          <label className="feedback-field__upload">
            <UploadIcon />
            <span>
              {form.attachment ? form.attachment.name : 'Kéo thả hoặc '}
              {!form.attachment && <em>chọn ảnh</em>}
            </span>
            <small>Hỗ trợ JPG, PNG (tối đa 5MB)</small>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              hidden
              onChange={(event) => updateField('attachment', event.target.files?.[0] || null)}
            />
          </label>
        </section>

        <div className="feedback-form__actions">
          <button type="submit" className="feedback-form__submit" disabled={submitting}>
            {submitting ? 'Đang gửi...' : 'Gửi phản hồi'}
          </button>
          <p className="feedback-form__footnote">
            Hoặc gửi qua{' '}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer noopener">
              Google Forms
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" />
      <path d="M8 14.5 12 18.5 20 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" aria-hidden="true">
      <path d="M10 2v14M4 8l6-6 6 6" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 22h16" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

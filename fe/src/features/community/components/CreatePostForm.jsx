import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PostContentEditor from './PostContentEditor'
import PostCoverSection from './PostCoverSection'
import PostTagsInput from './PostTagsInput'
import {
  MAJOR_OPTIONS,
  SEMESTER_OPTIONS,
  validateCreatePostForm,
} from '../createPostConstants'

const INITIAL_FORM = {
  title: '',
  semester: '',
  major: '',
  content: '',
  tags: [],
  coverUrl: '',
  anonymous: false,
  allowComments: true,
}

export default function CreatePostForm() {
  const navigate = useNavigate()
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateCreatePostForm(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      navigate('/feed')
    }, 600)
  }

  return (
    <div className="create-post-form">
      <header className="create-post-form__header">
        <Link to="/feed" className="create-post-form__back">
          <BackIcon />
          Quay lại cộng đồng
        </Link>
        <h1>Tạo bài viết mới</h1>
        <p>
          Chia sẻ kiến thức của bạn với cộng đồng. Bài viết sẽ được admin xem xét trước khi xuất
          bản.
        </p>
      </header>

      <form className="create-post-form__body" onSubmit={handleSubmit} noValidate>
        <section className="create-post-card">
          <label className="create-post-label" htmlFor="post-title">
            Tiêu đề bài viết *
          </label>
          <input
            id="post-title"
            type="text"
            className="create-post-input"
            placeholder="Nhập tiêu đề hấp dẫn..."
            value={form.title}
            onChange={(event) => updateField('title', event.target.value)}
          />
          {errors.title && <p className="create-post-form__error">{errors.title}</p>}

          <div className="create-post-form__grid">
            <div>
              <label className="create-post-label" htmlFor="post-semester">
                Học kỳ
              </label>
              <select
                id="post-semester"
                className="create-post-input"
                value={form.semester}
                onChange={(event) => updateField('semester', event.target.value)}
              >
                <option value="">Chọn học kỳ</option>
                {SEMESTER_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.semester && <p className="create-post-form__error">{errors.semester}</p>}
            </div>

            <div>
              <label className="create-post-label" htmlFor="post-major">
                Chuyên ngành
              </label>
              <select
                id="post-major"
                className="create-post-input"
                value={form.major}
                onChange={(event) => updateField('major', event.target.value)}
              >
                <option value="">Chọn chuyên ngành</option>
                {MAJOR_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.major && <p className="create-post-form__error">{errors.major}</p>}
            </div>
          </div>
        </section>

        <PostContentEditor
          value={form.content}
          onChange={(value) => updateField('content', value)}
          error={errors.content}
        />

        <PostCoverSection coverUrl={form.coverUrl} onCoverChange={(value) => updateField('coverUrl', value)} />

        <section className="create-post-card">
          <h3 className="create-post-card__title">Gắn thẻ (Tags)</h3>
          <PostTagsInput
            tags={form.tags}
            onChange={(value) => updateField('tags', value)}
            error={errors.tags}
          />
        </section>

        <section className="create-post-options">
          <div className="create-post-switch-card">
            <div>
              <strong>Đăng ẩn danh</strong>
              <p>Tên của bạn sẽ không hiển thị trên bài viết này.</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={form.anonymous}
              className={`create-post-switch${form.anonymous ? ' create-post-switch--on' : ''}`}
              onClick={() => updateField('anonymous', !form.anonymous)}
            >
              <span />
            </button>
          </div>

          <label className="create-post-checkbox">
            <input
              type="checkbox"
              checked={form.allowComments}
              onChange={(event) => updateField('allowComments', event.target.checked)}
            />
            Cho phép bình luận
          </label>

          <div className="create-post-notice">
            <ClockIcon />
            <div>
              <strong>Chờ phê duyệt</strong>
              <p>
                Bài viết của bạn sẽ được admin xem xét trước khi xuất bản. Bạn sẽ nhận được thông
                báo khi bài viết được duyệt.
              </p>
            </div>
          </div>
        </section>

        <div className="create-post-form__actions">
          <button type="button" className="create-post-btn create-post-btn--outline" onClick={() => navigate('/feed')}>
            Hủy
          </button>
          <button type="submit" className="create-post-btn create-post-btn--primary" disabled={submitting}>
            {submitting ? 'Đang đăng...' : 'Đăng bài →'}
          </button>
        </div>
      </form>
    </div>
  )
}

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

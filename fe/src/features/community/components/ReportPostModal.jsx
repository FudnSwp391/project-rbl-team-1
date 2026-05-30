import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { REPORT_REASONS } from '../hooks/usePostEngagement'

export default function ReportPostModal({ post, status, onClose, onSubmit }) {
  const [reason, setReason] = useState(REPORT_REASONS[0].value)
  const [detail, setDetail] = useState('')

  useEffect(() => {
    if (!post) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [post, onClose])

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ reason, detail: detail.trim() })
  }

  if (!post) return null

  return createPortal(
    <div className="report-post-modal" role="dialog" aria-modal="true" aria-labelledby="report-post-title">
      <button
        type="button"
        className="report-post-modal__backdrop"
        onClick={onClose}
        aria-label="Đóng báo cáo"
      />

      <div className="report-post-modal__panel">
        <header className="report-post-modal__header">
          <h2 id="report-post-title">Báo cáo bài viết</h2>
          <button type="button" className="report-post-modal__close" onClick={onClose} aria-label="Đóng">
            ×
          </button>
        </header>

        {status?.type === 'success' ? (
          <div className="report-post-modal__success">
            <p>{status.message}</p>
            <button type="button" onClick={onClose}>
              Đóng
            </button>
          </div>
        ) : (
          <form className="report-post-modal__form" onSubmit={handleSubmit}>
            <p className="report-post-modal__target">
              Bạn đang báo cáo bài viết: <strong>{post.title}</strong>
            </p>

            <label className="report-post-modal__field">
              Lý do báo cáo
              <select value={reason} onChange={(event) => setReason(event.target.value)}>
                {REPORT_REASONS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="report-post-modal__field">
              Mô tả thêm (tuỳ chọn)
              <textarea
                rows={4}
                value={detail}
                onChange={(event) => setDetail(event.target.value)}
                placeholder="Mô tả chi tiết lý do báo cáo..."
              />
            </label>

            <div className="report-post-modal__actions">
              <button type="button" className="report-post-modal__cancel" onClick={onClose}>
                Huỷ
              </button>
              <button type="submit" className="report-post-modal__submit">
                Gửi báo cáo
              </button>
            </div>
          </form>
        )}
      </div>
    </div>,
    document.body,
  )
}

import { useRef, useState } from 'react'

export default function PostCoverSection({ coverUrl, onCoverChange }) {
  const [mode, setMode] = useState('upload')
  const fileRef = useRef(null)

  const handleFile = (file) => {
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') onCoverChange(reader.result)
    }
    reader.readAsDataURL(file)
  }

  return (
    <section className="create-post-card">
      <div className="create-post-card__head">
        <h3>Ảnh bìa bài viết</h3>
        <div className="create-post-tabs create-post-tabs--compact">
          <button
            type="button"
            className={mode === 'upload' ? 'create-post-tabs__btn--active' : ''}
            onClick={() => setMode('upload')}
          >
            Tải lên
          </button>
          <button
            type="button"
            className={mode === 'url' ? 'create-post-tabs__btn--active' : ''}
            onClick={() => setMode('url')}
          >
            URL
          </button>
        </div>
      </div>

      {mode === 'url' ? (
        <input
          type="url"
          className="create-post-input"
          placeholder="https://example.com/image.jpg"
          value={coverUrl?.startsWith('data:') ? '' : (coverUrl ?? '')}
          onChange={(event) => onCoverChange(event.target.value)}
        />
      ) : (
        <div className="create-post-cover__dropzone">
          {coverUrl ? (
            <img src={coverUrl} alt="Ảnh bìa xem trước" className="create-post-cover__preview" />
          ) : (
            <div className="create-post-cover__icon">
              <ImagePlusIcon />
            </div>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="create-post-cover__file"
            onChange={(event) => handleFile(event.target.files?.[0])}
          />
          <button type="button" className="create-post-btn create-post-btn--outline" onClick={() => fileRef.current?.click()}>
            Chọn ảnh từ máy
          </button>
          <p className="create-post-cover__hint">PNG, JPG tối đa 5MB. Khuyến nghị tỷ lệ 16:9.</p>
        </div>
      )}
    </section>
  )
}

function ImagePlusIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 22l7-7 6 6 4-4 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 10h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

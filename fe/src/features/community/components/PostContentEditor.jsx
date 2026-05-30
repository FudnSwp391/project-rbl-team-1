import { useState } from 'react'
import { MAX_POST_CONTENT } from '../createPostConstants'

export default function PostContentEditor({ value, onChange, error }) {
  const [tab, setTab] = useState('edit')

  return (
    <section className="create-post-editor">
      <div className="create-post-editor__header">
        <span>Nội dung bài viết *</span>
        <div className="create-post-tabs">
          <button
            type="button"
            className={tab === 'edit' ? 'create-post-tabs__btn--active' : ''}
            onClick={() => setTab('edit')}
          >
            Chỉnh sửa
          </button>
          <button
            type="button"
            className={tab === 'preview' ? 'create-post-tabs__btn--active' : ''}
            onClick={() => setTab('preview')}
          >
            Xem trước
          </button>
        </div>
      </div>

      {tab === 'edit' && (
        <div className="create-post-editor__toolbar">
          <select defaultValue="paragraph" aria-label="Kiểu đoạn văn">
            <option value="paragraph">Đoạn văn</option>
            <option value="h1">Tiêu đề 1</option>
            <option value="h2">Tiêu đề 2</option>
          </select>
          <span className="create-post-editor__divider" />
          {['B', 'I', 'S', 'H', '•', '1.', '"', '</>', '🔗', '🖼'].map((label) => (
            <button key={label} type="button" title={label}>
              {label}
            </button>
          ))}
        </div>
      )}

      {tab === 'edit' ? (
        <textarea
          value={value}
          onChange={(event) => onChange(event.target.value.slice(0, MAX_POST_CONTENT))}
          placeholder="Viết nội dung bài viết của bạn tại đây..."
          rows={12}
        />
      ) : (
        <div className="create-post-editor__preview">
          {value.trim() ? <p>{value}</p> : <p className="create-post-editor__empty">Chưa có nội dung để xem trước.</p>}
        </div>
      )}

      <div className="create-post-editor__footer">
        <span className={value.length > MAX_POST_CONTENT * 0.9 ? 'create-post-editor__count--warn' : ''}>
          {value.length} / {MAX_POST_CONTENT}
        </span>
      </div>
      {error && <p className="create-post-form__error create-post-form__error--pad">{error}</p>}
    </section>
  )
}

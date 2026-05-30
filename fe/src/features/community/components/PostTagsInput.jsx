import { useState } from 'react'

function normalizeTag(raw) {
  const trimmed = raw.trim().replace(/^#+/, '')
  return trimmed ? `#${trimmed.toLowerCase()}` : ''
}

export default function PostTagsInput({ tags, onChange, error }) {
  const [input, setInput] = useState('')

  const addTag = (raw) => {
    const tag = normalizeTag(raw)
    if (!tag || tags.includes(tag) || tags.length >= 10) return
    onChange([...tags, tag])
    setInput('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      addTag(input)
    }
    if (event.key === 'Backspace' && !input && tags.length > 0) {
      onChange(tags.slice(0, -1))
    }
  }

  return (
    <div className="create-post-tags">
      <div className={`create-post-tags__field${error ? ' create-post-tags__field--error' : ''}`}>
        {tags.map((tag) => (
          <span key={tag} className="create-post-tags__chip">
            {tag}
            <button
              type="button"
              onClick={() => onChange(tags.filter((item) => item !== tag))}
              aria-label={`Xóa thẻ ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => input && addTag(input)}
          placeholder={tags.length === 0 ? 'Thêm thẻ (vd: #java, #csi101)...' : ''}
        />
      </div>
      {error && <p className="create-post-form__error">{error}</p>}
    </div>
  )
}

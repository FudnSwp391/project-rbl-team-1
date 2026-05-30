import { useState } from 'react'

export default function ChatComposer() {
  const [draft, setDraft] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setDraft('')
  }

  return (
    <form className="messages-composer" onSubmit={handleSubmit}>
      <button type="button" className="messages-icon-btn" aria-label="Đính kèm tệp">
        <PaperclipIcon />
      </button>
      <button type="button" className="messages-icon-btn" aria-label="Gửi ảnh">
        <ImageIcon />
      </button>

      <label className="messages-composer__input-wrap">
        <input
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Nhập tin nhắn..."
          aria-label="Nhập tin nhắn"
        />
        <button type="button" className="messages-composer__emoji" aria-label="Biểu tượng cảm xúc">
          <SmileIcon />
        </button>
      </label>

      <button type="submit" className="messages-composer__send" aria-label="Gửi tin nhắn">
        <SendIcon />
      </button>
    </form>
  )
}

function PaperclipIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M16 9.5 8.5 17a3 3 0 0 1-4.24-4.24l8-8a2 2 0 1 1 2.83 2.83l-8 8a1 1 0 0 1-1.41-1.41l7.5-7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7.5" cy="8.5" r="1.5" fill="currentColor" />
      <path d="m3 14 4-4 3 3 2-2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function SmileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 12c.7 1 1.7 1.5 3 1.5s2.3-.5 3-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7.5" cy="8.5" r="0.75" fill="currentColor" />
      <circle cx="12.5" cy="8.5" r="0.75" fill="currentColor" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="m4 10 12-6-2.5 6L4 10Zm0 0 12 6-2.5-6L4 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

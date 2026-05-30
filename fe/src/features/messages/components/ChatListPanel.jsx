import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getChatPreviews } from '../messagesMockData'
import ChatListItem from './ChatListItem'

export default function ChatListPanel() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const activeId = searchParams.get('conversation') ?? 'c1'
  const [query, setQuery] = useState('')
  const chats = getChatPreviews()

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return chats

    return chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(normalized) ||
        chat.lastMessage.toLowerCase().includes(normalized),
    )
  }, [chats, query])

  const handleSelect = (id) => {
    navigate(`/messages?conversation=${id}`)
  }

  return (
    <aside className="messages-list-panel">
      <div className="messages-list-panel__head">
        <div className="messages-list-panel__title-row">
          <h2>Tin nhắn</h2>
          <button type="button" className="messages-icon-btn" aria-label="Soạn tin nhắn mới">
            <ComposeIcon />
          </button>
        </div>

        <label className="messages-search">
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Tìm kiếm hội thoại..."
            aria-label="Tìm kiếm hội thoại"
          />
        </label>
      </div>

      <div className="messages-list-panel__list">
        {filtered.length === 0 ? (
          <p className="messages-list-panel__empty">Không tìm thấy hội thoại</p>
        ) : (
          filtered.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              isActive={chat.id === activeId}
              onSelect={handleSelect}
            />
          ))
        )}
      </div>
    </aside>
  )
}

function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

function ComposeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M14.5 3.5 16.5 5.5 7 15H5v-2l9.5-9.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12.5 5.5 14.5 7.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

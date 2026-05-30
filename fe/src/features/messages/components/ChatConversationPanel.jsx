import { useSearchParams } from 'react-router-dom'
import { getConversation } from '../messagesMockData'
import ChatAvatar from './ChatAvatar'
import ChatComposer from './ChatComposer'
import ChatMessageBubble from './ChatMessageBubble'
import ChatTypingIndicator from './ChatTypingIndicator'

export default function ChatConversationPanel() {
  const [searchParams] = useSearchParams()
  const conversationId = searchParams.get('conversation') ?? 'c1'
  const conversation = getConversation(conversationId)

  if (!conversation) {
    return (
      <section className="messages-conversation messages-conversation--empty">
        <p>Không tìm thấy cuộc trò chuyện</p>
      </section>
    )
  }

  return (
    <section className="messages-conversation">
      <header className="messages-conversation__head">
        <div className="messages-conversation__peer">
          <ChatAvatar
            initial={conversation.initial}
            avatarColor={conversation.avatarColor}
            textColor={conversation.textColor}
            isOnline={conversation.isOnline}
            size="sm"
          />
          <div>
            <h3>{conversation.name}</h3>
            <p>{conversation.statusLabel}</p>
          </div>
        </div>

        <div className="messages-conversation__actions">
          <button type="button" className="messages-icon-btn" aria-label="Gọi thoại">
            <PhoneIcon />
          </button>
          <button type="button" className="messages-icon-btn" aria-label="Gọi video">
            <VideoIcon />
          </button>
          <button type="button" className="messages-icon-btn" aria-label="Thông tin hội thoại">
            <InfoIcon />
          </button>
          <button type="button" className="messages-icon-btn" aria-label="Tùy chọn">
            <MoreIcon />
          </button>
        </div>
      </header>

      <div className="messages-conversation__body">
        <div className="messages-conversation__date">
          <span>{conversation.dateDivider}</span>
        </div>

        {conversation.messages.map((message) => (
          <ChatMessageBubble
            key={message.id}
            message={message}
            peerInitial={conversation.initial}
            peerAvatarColor={conversation.avatarColor}
            peerTextColor={conversation.textColor}
          />
        ))}

        {conversation.isTyping ? (
          <ChatTypingIndicator
            initial={conversation.initial}
            avatarColor={conversation.avatarColor}
            textColor={conversation.textColor}
          />
        ) : null}
      </div>

      <ChatComposer />
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M6.5 4.5c.5 2 1.8 4.2 3.8 6.2s4.2 3.3 6.2 3.8l1.5-1.5c.3-.3.8-.4 1.2-.2 1 .4 2.1.7 3.2.7.6 0 1 .4 1 1V16c0 .6-.4 1-1 1C9.6 17 3 10.4 3 3c0-.6.4-1 1-1h2.7c.6 0 1 .4 1 1 0 1.1.3 2.2.7 3.2.2.4.1.9-.2 1.2l-1.5 1.1Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 8.5 17 6v8l-4-2.5V8.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 9v5M10 6.5v.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="5" r="1.2" fill="currentColor" />
      <circle cx="10" cy="10" r="1.2" fill="currentColor" />
      <circle cx="10" cy="15" r="1.2" fill="currentColor" />
    </svg>
  )
}

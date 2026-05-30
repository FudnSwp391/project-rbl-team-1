import ChatAvatar from '@/features/messages/components/ChatAvatar'

export default function FloatingChatListItem({ chat, onSelect }) {
  return (
    <button type="button" className="floating-chat-item" onClick={() => onSelect(chat.id)}>
      <ChatAvatar
        initial={chat.initial}
        avatarColor={chat.avatarColor}
        textColor={chat.textColor}
        isOnline={chat.isOnline}
        size="lg"
      />

      <span className="floating-chat-item__body">
        <span className="floating-chat-item__top">
          <span className="floating-chat-item__name">{chat.name}</span>
          <span className="floating-chat-item__time">{chat.timeLabel}</span>
        </span>
        <span className="floating-chat-item__bottom">
          <span className="floating-chat-item__preview">{chat.lastMessage}</span>
          {chat.unreadCount > 0 ? (
            <span className="floating-chat-item__badge">{chat.unreadCount}</span>
          ) : null}
        </span>
      </span>
    </button>
  )
}

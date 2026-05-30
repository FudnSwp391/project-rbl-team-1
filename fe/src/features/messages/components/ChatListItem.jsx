import ChatAvatar from './ChatAvatar'

export default function ChatListItem({ chat, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`messages-list-item${isActive ? ' messages-list-item--active' : ''}`}
      onClick={() => onSelect(chat.id)}
    >
      <ChatAvatar
        initial={chat.initial}
        avatarColor={chat.avatarColor}
        textColor={chat.textColor}
        isOnline={chat.isOnline}
        size="lg"
      />

      <span className="messages-list-item__body">
        <span className="messages-list-item__top">
          <span className="messages-list-item__name">{chat.name}</span>
          <span className="messages-list-item__time">{chat.timeLabel}</span>
        </span>
        <span className="messages-list-item__bottom">
          <span className="messages-list-item__preview">{chat.lastMessage}</span>
          {chat.unreadCount > 0 ? (
            <span className="messages-list-item__badge">{chat.unreadCount}</span>
          ) : null}
        </span>
      </span>
    </button>
  )
}

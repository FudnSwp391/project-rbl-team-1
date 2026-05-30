import ChatAvatar from './ChatAvatar'

export default function ChatTypingIndicator({ initial, avatarColor, textColor }) {
  return (
    <div className="messages-typing">
      <ChatAvatar
        initial={initial}
        avatarColor={avatarColor}
        textColor={textColor}
        size="sm"
        className="messages-bubble__avatar"
      />
      <div className="messages-typing__bubble" aria-label="Đang nhập">
        <span className="messages-typing__dot" />
        <span className="messages-typing__dot" />
        <span className="messages-typing__dot" />
      </div>
    </div>
  )
}

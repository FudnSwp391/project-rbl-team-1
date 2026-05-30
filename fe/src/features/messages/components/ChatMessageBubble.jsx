import ChatAvatar from './ChatAvatar'

export default function ChatMessageBubble({
  message,
  peerInitial,
  peerAvatarColor,
  peerTextColor,
}) {
  const isMe = message.sender === 'me'

  if (isMe) {
    return (
      <div className="messages-bubble messages-bubble--me">
        <div className="messages-bubble__content">{message.content}</div>
        <span className="messages-bubble__time">{message.timeLabel}</span>
      </div>
    )
  }

  return (
    <div className="messages-bubble messages-bubble--them">
      <ChatAvatar
        initial={peerInitial}
        avatarColor={peerAvatarColor}
        textColor={peerTextColor}
        size="sm"
        className="messages-bubble__avatar"
      />
      <div className="messages-bubble__stack">
        <div className="messages-bubble__content">{message.content}</div>
        <span className="messages-bubble__time">{message.timeLabel}</span>
      </div>
    </div>
  )
}

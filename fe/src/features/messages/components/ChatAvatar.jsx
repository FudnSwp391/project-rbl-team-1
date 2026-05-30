const SIZE_MAP = {
  sm: 'messages-avatar--sm',
  md: 'messages-avatar--md',
  lg: 'messages-avatar--lg',
}

export default function ChatAvatar({
  initial,
  avatarColor,
  textColor,
  isOnline = false,
  size = 'md',
  className = '',
}) {
  return (
    <span className={`messages-avatar ${SIZE_MAP[size] ?? SIZE_MAP.md} ${className}`.trim()}>
      <span
        className="messages-avatar__circle"
        style={{ background: avatarColor, color: textColor }}
      >
        {initial}
      </span>
      {isOnline ? <span className="messages-avatar__dot" aria-hidden="true" /> : null}
    </span>
  )
}

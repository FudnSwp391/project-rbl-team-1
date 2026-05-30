import { useDispatch, useSelector } from 'react-redux'
import { toggleFloatingChat } from '@/features/social/chatSlice'

export default function FloatingChatLauncher() {
  const dispatch = useDispatch()
  const isOpen = useSelector((state) => state.chat.isFloatingOpen)

  return (
    <button
      type="button"
      className={`floating-chat-fab${isOpen ? ' floating-chat-fab--open' : ''}`}
      onClick={() => dispatch(toggleFloatingChat())}
      aria-label={isOpen ? 'Đóng tin nhắn' : 'Mở tin nhắn nhanh'}
      aria-expanded={isOpen}
    >
      <ChatFabIcon />
    </button>
  )
}

function ChatFabIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7l-4.5 3v-3H6a2 2 0 0 1-2-2V5Z"
        fill="currentColor"
      />
      <path
        d="M8 9.5h8M8 12.5h6M8 15.5h4"
        stroke="#004ac6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { closeFloatingChat } from '@/features/social/chatSlice'
import { getChatPreviews } from '@/features/messages/messagesMockData'
import FloatingChatListItem from './FloatingChatListItem'

export default function FloatingChatPanel() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const chats = getChatPreviews()

  const handleClose = () => {
    dispatch(closeFloatingChat())
  }

  const handleSelect = (chatId) => {
    dispatch(closeFloatingChat())
    navigate(`/messages?conversation=${chatId}`)
  }

  return (
    <div className="floating-chat-panel" role="dialog" aria-label="Danh sách tin nhắn">
      <div className="floating-chat-panel__head">
        <h2>Tin nhắn</h2>
        <button type="button" className="floating-chat-panel__close" onClick={handleClose} aria-label="Đóng">
          <CloseIcon />
        </button>
      </div>

      <div className="floating-chat-panel__list">
        {chats.map((chat) => (
          <FloatingChatListItem key={chat.id} chat={chat} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  )
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4 12 12M12 4 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

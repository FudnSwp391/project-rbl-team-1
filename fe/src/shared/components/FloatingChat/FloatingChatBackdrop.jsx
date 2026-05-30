import { useDispatch } from 'react-redux'
import { closeFloatingChat } from '@/features/social/chatSlice'

export default function FloatingChatBackdrop() {
  const dispatch = useDispatch()

  return (
    <button
      type="button"
      className="floating-chat-backdrop"
      aria-label="Đóng hộp thoại"
      onClick={() => dispatch(closeFloatingChat())}
    />
  )
}

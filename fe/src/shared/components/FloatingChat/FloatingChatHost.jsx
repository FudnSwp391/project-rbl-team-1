import { useSelector } from 'react-redux'
import FloatingChatBackdrop from './FloatingChatBackdrop'
import FloatingChatPanel from './FloatingChatPanel'

export default function FloatingChatHost() {
  const isOpen = useSelector((state) => state.chat.isFloatingOpen)

  if (!isOpen) return null

  return (
    <>
      <FloatingChatBackdrop />
      <FloatingChatPanel />
    </>
  )
}

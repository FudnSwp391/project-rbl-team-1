import AppRoutes from '@/app/AppRoutes'
import { FloatingChatRoot } from '@/shared/components/FloatingChat'
import '@/shared/components/FloatingChat/floating-chat.css'
import '@/features/messages/messages.css'

export default function App() {
  return (
    <>
      <AppRoutes />
      <FloatingChatRoot />
    </>
  )
}

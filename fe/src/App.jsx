import AppRoutes from '@/app/AppRoutes'
import ScrollToHash from '@/shared/components/ScrollToHash'
import { FloatingChatRoot } from '@/shared/components/FloatingChat'
import '@/shared/components/FloatingChat/floating-chat.css'
import '@/features/messages/messages.css'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <AppRoutes />
      <FloatingChatRoot />
    </>
  )
}

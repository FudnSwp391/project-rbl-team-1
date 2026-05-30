import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import ChatInbox from '../components/ChatInbox'
import { getDefaultConversationId } from '../messagesMockData'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import '../messages.css'

export default function MessagesPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('conversation')) {
      const defaultId = getDefaultConversationId()
      if (defaultId) {
        navigate(`/messages?conversation=${defaultId}`, { replace: true })
      }
    }
  }, [searchParams, navigate])

  return (
    <div className="messages-page">
      <AppHeaderLoggedIn />
      <main className="logged-in-page__main">
        <div className="logged-in-page__layout">
          <CommunitySidebar activeMain="messages" homePath="/feed" />
          <div className="messages-page__content">
            <ChatInbox />
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

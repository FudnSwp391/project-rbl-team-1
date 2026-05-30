import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import FriendSearchHero from '../components/FriendSearchHero'
import FriendsResultsList from '../components/FriendsResultsList'
import { findFriends } from '../friendsMockData'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import '../friends.css'

export default function FindFriendsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const results = useMemo(() => findFriends(query), [query])

  return (
    <div className="friends-page">
      <AppHeaderLoggedIn searchQuery={query} />
      <main className="logged-in-page__main">
        <div className="logged-in-page__layout">
          <CommunitySidebar activeMain="friends" homePath="/feed" />
          <div className="friends-page__content">
            <FriendSearchHero />
            {query ? (
              <FriendsResultsList users={results.users} total={results.total} />
            ) : (
              <div className="friends-empty friends-empty--prompt">
                <p className="friends-empty__desc">
                  Nhập từ khóa ở trên để bắt đầu tìm bạn bè trong cộng đồng SEHub.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <button type="button" className="friends-page__fab" aria-label="Mở tin nhắn nhanh">
        <MessageIcon />
      </button>
      <AppFooter />
    </div>
  )
}

function MessageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 4h18v12a1 1 0 0 1-1 1H8l-5 4V5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )
}

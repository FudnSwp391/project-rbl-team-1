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
      <AppFooter />
    </div>
  )
}

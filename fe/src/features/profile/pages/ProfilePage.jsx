import { Link, useParams } from 'react-router-dom'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import { LOGGED_IN_USER } from '@/features/community/loggedInMockData'
import useAuth from '@/shared/hooks/useAuth'
import ProfileSummaryCard from '../components/ProfileSummaryCard'
import ProfileAboutSection from '../components/ProfileAboutSection'
import ProfileActivityHeatmap from '../components/ProfileActivityHeatmap'
import ProfileBadgesSection from '../components/ProfileBadgesSection'
import ProfileRecentPosts from '../components/ProfileRecentPosts'
import { getProfileByUsername } from '../profileMockData'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import '../profile.css'

export default function ProfilePage() {
  const { username: routeUsername } = useParams()
  const { user } = useAuth()
  const currentUsername = user?.username || LOGGED_IN_USER.username
  const username = routeUsername || currentUsername
  const profile = getProfileByUsername(username)
  const isOwnProfile = profile?.username === currentUsername

  return (
    <div className="profile-page">
      <AppHeaderLoggedIn />
      <main className="logged-in-page__main">
        <div className="logged-in-page__layout">
          <CommunitySidebar activeMain="friends" homePath="/feed" />
          <div className="profile-page__content">
            {!profile ? (
              <div className="profile-empty">
                <h1>Không tìm thấy hồ sơ</h1>
                <p>
                  Người dùng &quot;{username}&quot; không tồn tại hoặc hồ sơ đã bị ẩn.
                </p>
                <Link to="/friends">Quay lại tìm bạn bè</Link>
              </div>
            ) : (
              <div className="profile-page__grid">
                <ProfileSummaryCard profile={profile} isOwnProfile={isOwnProfile} />
                <div className="profile-page__sections">
                  <ProfileAboutSection profile={profile} />
                  <ProfileActivityHeatmap
                    heatmap={profile.heatmap}
                    activityCount={profile.activityCount}
                  />
                  <ProfileBadgesSection badges={profile.badges} />
                  <ProfileRecentPosts posts={profile.recentPosts} />
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <button type="button" className="profile-page__fab" aria-label="Mở tin nhắn nhanh">
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

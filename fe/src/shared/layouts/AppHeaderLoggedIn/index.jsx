import BrandLogo from '@/shared/components/BrandLogo'
import '@/shared/components/BrandLogo/brand-logo.css'
import useAuth from '@/shared/hooks/useAuth'
import HeaderSearch from './HeaderSearch'
import FireStreak from './FireStreak'
import NotificationBell from './NotificationBell'
import ProfileMenu from './ProfileMenu'
import { LOGGED_IN_USER } from '@/features/community/loggedInMockData'

export default function AppHeaderLoggedIn({ searchQuery = '' }) {
  const { user } = useAuth()

  const profileUser = {
    username: user?.username || LOGGED_IN_USER.username,
    email: user?.email || LOGGED_IN_USER.email,
    displayName: user?.fullName || LOGGED_IN_USER.displayName,
    profileHref: LOGGED_IN_USER.profileHref,
  }

  return (
    <header className="app-header-logged-in">
      <div className="app-header-logged-in__inner">
        <BrandLogo to="/feed" className="app-header-logged-in__brand" />

        <div className="app-header-logged-in__search">
          <HeaderSearch defaultQuery={searchQuery} />
        </div>

        <div className="app-header-logged-in__actions">
          <NotificationBell />
          <FireStreak />
          <ProfileMenu user={profileUser} />
        </div>
      </div>

      <div className="app-header-logged-in__search-mobile">
        <HeaderSearch defaultQuery={searchQuery} />
      </div>
    </header>
  )
}

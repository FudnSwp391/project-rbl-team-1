import { Link } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import logo from '@/assets/logos/sehub-logo.png'
import HeaderSearch from './HeaderSearch'
import FireStreak from './FireStreak'
import ProfileMenu from './ProfileMenu'
import { HEADER_BADGES, LOGGED_IN_USER } from '@/features/community/loggedInMockData'

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
        <Link to="/feed" className="app-header-logged-in__brand">
          <img src={logo} alt="SEHub" className="app-header-logged-in__logo" />
          <span className="app-header-logged-in__name">SEHub</span>
        </Link>

        <div className="app-header-logged-in__search">
          <HeaderSearch defaultQuery={searchQuery} />
        </div>

        <div className="app-header-logged-in__actions">
          <button type="button" className="app-header-logged-in__icon-btn" aria-label="Thông báo">
            <BellIcon />
            <span className="app-header-logged-in__badge">{HEADER_BADGES.notifications}</span>
          </button>
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

function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3a5 5 0 0 1 5 5v3.2l1.8 3H5.2l1.8-3V8a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M9.5 17.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}


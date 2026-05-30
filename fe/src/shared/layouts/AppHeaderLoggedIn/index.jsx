import { Link } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import logo from '@/assets/logos/sehub-logo.png'
import HeaderSearch from './HeaderSearch'
import ProfileMenu from './ProfileMenu'
import { LOGGED_IN_USER } from '@/features/community/loggedInMockData'

export default function AppHeaderLoggedIn() {
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
          <HeaderSearch />
        </div>

        <div className="app-header-logged-in__actions">
          <button type="button" className="app-header-logged-in__icon-btn" aria-label="Tin nhắn">
            <MessageIcon />
            <span className="app-header-logged-in__badge">2</span>
          </button>
          <button type="button" className="app-header-logged-in__icon-btn" aria-label="Thông báo">
            <BellIcon />
            <span className="app-header-logged-in__badge">3</span>
          </button>
          <ProfileMenu user={profileUser} />
        </div>
      </div>

      <div className="app-header-logged-in__search-mobile">
        <HeaderSearch />
      </div>
    </header>
  )
}

function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 3h16v10a1 1 0 0 1-1 1H6l-4 4V3Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2a5 5 0 0 1 5 5v3l1.5 2.5H3.5L5 10V7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.5 15a1.5 1.5 0 0 0 3 0" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

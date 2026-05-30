import { Link } from 'react-router-dom'
import { SUBSCRIPTION_STRINGS } from '@/features/subscription/types'

interface SubscriptionHeaderProps {
  userEmail: string
  userInitial: string
  notificationCount: number
  streakCount: number
}

export default function SubscriptionHeader({
  userEmail,
  userInitial,
  notificationCount,
  streakCount,
}: SubscriptionHeaderProps) {
  return (
    <header className="subscription-header">
      <Link to="/" className="subscription-header__brand">
        <span className="subscription-header__logo-mark" aria-hidden="true">
          S
        </span>
        <span className="subscription-header__brand-name">{SUBSCRIPTION_STRINGS.HEADER.BRAND}</span>
      </Link>

      <div className="subscription-header__search">
        <SearchIcon />
        <input
          type="search"
          className="subscription-header__search-input"
          placeholder={SUBSCRIPTION_STRINGS.HEADER.SEARCH_PLACEHOLDER}
          aria-label={SUBSCRIPTION_STRINGS.HEADER.SEARCH_PLACEHOLDER}
        />
      </div>

      <div className="subscription-header__actions">
        <button type="button" className="subscription-header__icon-button" aria-label="Notifications">
          <BellIcon />
          <span className="subscription-header__badge subscription-header__badge--purple">
            {notificationCount}
          </span>
        </button>

        <button type="button" className="subscription-header__icon-button" aria-label="Streak">
          <FireIcon />
          <span className="subscription-header__badge subscription-header__badge--orange">{streakCount}</span>
        </button>

        <button type="button" className="subscription-header__profile">
          <span className="subscription-header__avatar">{userInitial}</span>
          <span className="subscription-header__email">{userEmail}</span>
          <ChevronIcon />
        </button>
      </div>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.5 10.5 14 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M4 7.5a5 5 0 0 1 10 0c0 4.5 1.5 5.5 2 6H2c.5-.5 2-1.5 2-6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M7.5 14a1.8 1.8 0 0 0 3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function FireIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
      <path
        d="M8 1.5c1.2 2.2 3.5 3.2 3.5 6a3.5 3.5 0 1 1-7 0c0-2.8 2.3-3.8 3.5-6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

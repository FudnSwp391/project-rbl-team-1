import BrandLogo from '@/shared/components/BrandLogo'
import '@/shared/components/BrandLogo/brand-logo.css'
import { PAYMENT_STRINGS } from '@/features/payment/types'

interface PaymentHeaderProps {
  username: string
  email: string
  streakCount: number
  notificationCount: number
}

export default function PaymentHeader({
  username,
  email,
  streakCount,
  notificationCount,
}: PaymentHeaderProps) {
  return (
    <header className="payment-header">
      <div className="payment-header__left">
        <BrandLogo to="/" className="payment-header__brand" />

        <div className="payment-header__search">
          <SearchIcon />
          <input
            type="search"
            className="payment-header__search-input"
            placeholder={PAYMENT_STRINGS.HEADER.SEARCH_PLACEHOLDER}
            aria-label={PAYMENT_STRINGS.HEADER.SEARCH_PLACEHOLDER}
          />
        </div>
      </div>

      <div className="payment-header__actions">
        <div className="payment-header__streak">
          <FireIcon />
          <span>{streakCount}</span>
        </div>

        <button type="button" className="payment-header__icon-button" aria-label="Notifications">
          <BellIcon />
          <span className="payment-header__badge">{notificationCount}</span>
        </button>

        <button type="button" className="payment-header__icon-button" aria-label="Settings">
          <SettingsIcon />
        </button>

        <div className="payment-header__profile">
          <div className="payment-header__profile-text">
            <strong>{username}</strong>
            <span>{email}</span>
          </div>
          <span className="payment-header__avatar">{username.charAt(0).toUpperCase()}</span>
        </div>
      </div>
    </header>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 12 16 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
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
      />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
      <path d="M3 7.5a5 5 0 0 1 10 0c0 4 1.5 5 2 5.5H1c.5-.5 2-1.5 2-5.5Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 14a1.8 1.8 0 0 0 3 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.4 3.4l1.4 1.4M13.2 13.2l1.4 1.4M3.4 14.6l1.4-1.4M13.2 4.8l1.4-1.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  )
}

import { Link } from 'react-router-dom'
import { PAYMENT_STRINGS } from '@/features/payment/types'

interface PaymentSidebarProps {
  messageCount?: number
}

export default function PaymentSidebar({ messageCount = 3 }: PaymentSidebarProps) {
  return (
    <aside className="payment-sidebar">
      <nav className="payment-sidebar__nav" aria-label="Main navigation">
        <Link to="/" className="payment-sidebar__link payment-sidebar__link--active">
          <HomeIcon />
          <span>{PAYMENT_STRINGS.SIDEBAR.HOME}</span>
        </Link>
        <Link to="/support" className="payment-sidebar__link">
          <AdvisorIcon />
          <span>{PAYMENT_STRINGS.SIDEBAR.ADVISOR}</span>
        </Link>
        <Link to="/friends" className="payment-sidebar__link">
          <UsersIcon />
          <span>{PAYMENT_STRINGS.SIDEBAR.FIND_FRIENDS}</span>
        </Link>
      </nav>

      <div className="payment-sidebar__section">
        <h2 className="payment-sidebar__section-title">{PAYMENT_STRINGS.SIDEBAR.SUBJECTS_SECTION}</h2>
        <nav className="payment-sidebar__nav" aria-label="Subjects">
          <Link to="/exams" className="payment-sidebar__link">
            <HelpIcon />
            <span>{PAYMENT_STRINGS.SIDEBAR.REVIEW_QUESTIONS}</span>
          </Link>
          <Link to="/practice" className="payment-sidebar__link">
            <FlaskIcon />
            <span>{PAYMENT_STRINGS.SIDEBAR.PRACTICE_QUESTIONS}</span>
          </Link>
          <Link to="/documents" className="payment-sidebar__link">
            <BookIcon />
            <span>{PAYMENT_STRINGS.SIDEBAR.DOCUMENTS}</span>
          </Link>
        </nav>
      </div>

      <div className="payment-sidebar__section">
        <h2 className="payment-sidebar__section-title">{PAYMENT_STRINGS.SIDEBAR.INTERACTION_SECTION}</h2>
        <Link to="/chat" className="payment-sidebar__link payment-sidebar__link--badge">
          <MessageIcon />
          <span>{PAYMENT_STRINGS.SIDEBAR.MESSAGES}</span>
          <span className="payment-sidebar__message-badge">{messageCount}</span>
        </Link>
      </div>

      <div className="payment-sidebar__footer">
        <div className="payment-sidebar__community">
          <h3>{PAYMENT_STRINGS.SIDEBAR.COMMUNITY_TITLE}</h3>
          <p>
            {PAYMENT_STRINGS.SIDEBAR.COMMUNITY_DESCRIPTION_LINE_1}
            <br />
            {PAYMENT_STRINGS.SIDEBAR.COMMUNITY_DESCRIPTION_LINE_2}
          </p>
          <button type="button" className="payment-sidebar__community-button">
            {PAYMENT_STRINGS.SIDEBAR.COMMUNITY_CTA}
          </button>
        </div>

        <Link to="/support" className="payment-sidebar__link">
          <HelpCircleIcon />
          <span>{PAYMENT_STRINGS.SIDEBAR.HELP}</span>
        </Link>
      </div>
    </aside>
  )
}

function HomeIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
      <path d="M2 7 8 2l6 5v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function AdvisorIcon() {
  return (
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="14" cy="9" r="1" fill="currentColor" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 15c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="5.5" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7.5 7.5a2.5 2.5 0 1 1 4.5 1.5c0 1.5-2 1.8-2 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="10" cy="15" r="0.9" fill="currentColor" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
      <path d="M7 1h6l3 7-4 7H8L4 8l3-7Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" aria-hidden="true">
      <path d="M2 2h6v12H3a1 1 0 0 1-1-1V2Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 2h8a1 1 0 0 1 1 1v11H8V2Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 4h16v9H6l-4 4V4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

function HelpCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 14v.5M10 6.5a1.8 1.8 0 0 1 1.8 1.8c0 1.2-1.8 1.4-1.8 2.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

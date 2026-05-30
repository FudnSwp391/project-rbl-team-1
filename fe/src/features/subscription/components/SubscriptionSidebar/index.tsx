import { Link } from 'react-router-dom'
import { SUBSCRIPTION_STRINGS } from '@/features/subscription/types'

export default function SubscriptionSidebar() {
  return (
    <aside className="subscription-sidebar">
      <nav className="subscription-sidebar__nav" aria-label="Main navigation">
        <Link to="/" className="subscription-sidebar__link subscription-sidebar__link--active">
          <HomeIcon />
          <span>{SUBSCRIPTION_STRINGS.SIDEBAR.HOME}</span>
        </Link>

        <Link to="/support" className="subscription-sidebar__link">
          <AdvisorIcon />
          <span>{SUBSCRIPTION_STRINGS.SIDEBAR.ADVISOR}</span>
        </Link>

        <Link to="/friends" className="subscription-sidebar__link">
          <UsersIcon />
          <span>{SUBSCRIPTION_STRINGS.SIDEBAR.FIND_FRIENDS}</span>
        </Link>
      </nav>

      <div className="subscription-sidebar__section">
        <h2 className="subscription-sidebar__section-title">{SUBSCRIPTION_STRINGS.SIDEBAR.SUBJECTS_SECTION}</h2>
        <nav className="subscription-sidebar__nav" aria-label="Subjects">
          <Link to="/exams" className="subscription-sidebar__link">
            <HelpIcon />
            <span>{SUBSCRIPTION_STRINGS.SIDEBAR.REVIEW_QUESTIONS}</span>
          </Link>
          <Link to="/practice" className="subscription-sidebar__link">
            <FlaskIcon />
            <span>{SUBSCRIPTION_STRINGS.SIDEBAR.PRACTICE_QUESTIONS}</span>
          </Link>
          <Link to="/documents" className="subscription-sidebar__link">
            <BookIcon />
            <span>{SUBSCRIPTION_STRINGS.SIDEBAR.DOCUMENTS}</span>
          </Link>
        </nav>
      </div>

      <div className="subscription-sidebar__section">
        <h2 className="subscription-sidebar__section-title">{SUBSCRIPTION_STRINGS.SIDEBAR.INTERACTION_SECTION}</h2>
        <nav className="subscription-sidebar__nav" aria-label="Interaction">
          <Link to="/chat" className="subscription-sidebar__link">
            <MessageIcon />
            <span>{SUBSCRIPTION_STRINGS.SIDEBAR.MESSAGES}</span>
          </Link>
        </nav>
      </div>

      <div className="subscription-sidebar__community">
        <div className="subscription-sidebar__community-title">
          <DiscordIcon />
          <span>{SUBSCRIPTION_STRINGS.SIDEBAR.COMMUNITY_TITLE}</span>
        </div>
        <p className="subscription-sidebar__community-description">
          {SUBSCRIPTION_STRINGS.SIDEBAR.COMMUNITY_DESCRIPTION_LINE_1}
          <br />
          {SUBSCRIPTION_STRINGS.SIDEBAR.COMMUNITY_DESCRIPTION_LINE_2}
        </p>
        <button type="button" className="subscription-sidebar__community-button">
          {SUBSCRIPTION_STRINGS.SIDEBAR.COMMUNITY_CTA}
        </button>
      </div>

      <Link to="/feedback" className="subscription-sidebar__link">
        <MessageIcon />
        <span>{SUBSCRIPTION_STRINGS.SIDEBAR.FEEDBACK}</span>
      </Link>
    </aside>
  )
}

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 6.5 8 2l6 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6.5Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function AdvisorIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="14" height="10" rx="3" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="6.5" cy="8" r="1" fill="currentColor" />
      <circle cx="11.5" cy="8" r="1" fill="currentColor" />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <circle cx="6" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1 13c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="13" cy="4.5" r="2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function HelpIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.2 6a1.8 1.8 0 1 1 3.3.8c0 1.2-1.5 1.5-1.5 2.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="12" r="0.8" fill="currentColor" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 2h4l2 6-3 6H7L4 8l2-6Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden="true">
      <path d="M2 2h5v10H3a1 1 0 0 1-1-1V2Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 2h5a1 1 0 0 1 1 1v9H7V2Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 3h12v8H5l-3 3V3Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path
        d="M7.5 2.5c.8-.3 1.6-.5 2.5-.5s1.7.2 2.5.5l.5 1.5c.6.2 1.2.5 1.7.8L13 7l-1.3 2.2c-.5.3-1.1.6-1.7.8L9.5 12c-.8.3-1.6.5-2.5.5s-1.7-.2-2.5-.5L4 10c-.6-.2-1.2-.5-1.7-.8L1 7l1.3-2.2c.5-.3 1.1-.6 1.7-.8l.5-1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

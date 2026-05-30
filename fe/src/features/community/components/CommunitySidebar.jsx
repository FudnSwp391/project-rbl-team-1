import { Link } from 'react-router-dom'

const MAIN_NAV = [
  { label: 'Trang chủ', to: '/community', icon: HomeIcon, active: true },
  { label: 'Trợ lý tư vấn', to: '/chatbot', icon: BotIcon },
  { label: 'Tìm kiếm bạn bè', to: '/friends', icon: UsersIcon },
]

const SUBJECT_NAV = [
  { label: 'Câu hỏi ôn tập', to: '/exams', icon: HelpIcon },
  { label: 'Câu hỏi thực hành', to: '/practice', icon: FlaskIcon },
  { label: 'Tài liệu', to: '/documents', icon: BookIcon },
]

export default function CommunitySidebar() {
  return (
    <aside className="community-sidebar">
      <nav className="community-sidebar__nav">
        {MAIN_NAV.map(({ label, to, icon: Icon, active }) => (
          <Link
            key={label}
            to={to}
            className={`community-sidebar__link${active ? ' community-sidebar__link--active' : ''}`}
          >
            <Icon />
            {label}
          </Link>
        ))}
      </nav>

      <div className="community-sidebar__section">
        <h3>MÔN HỌC</h3>
        <nav className="community-sidebar__nav">
          {SUBJECT_NAV.map(({ label, to, icon: Icon }) => (
            <Link key={label} to={to} className="community-sidebar__link">
              <Icon />
              {label}
            </Link>
          ))}
        </nav>
      </div>
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

function BotIcon() {
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

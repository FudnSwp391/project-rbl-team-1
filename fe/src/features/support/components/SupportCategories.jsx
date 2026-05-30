import { Link } from 'react-router-dom'
import { SUPPORT_CATEGORIES } from '../supportMockData'

const ICONS = {
  account: AccountIcon,
  payment: PaymentIcon,
  ai: AiIcon,
  community: CommunityIcon,
  bug: BugIcon,
  guide: GuideIcon,
}

export default function SupportCategories() {
  return (
    <section className="support-section">
      <h2 className="support-section__title">Danh mục hỗ trợ</h2>
      <div className="support-categories">
        {SUPPORT_CATEGORIES.map(({ title, description, icon, to }) => {
          const Icon = ICONS[icon]
          const content = (
            <>
              <span className="support-categories__icon">
                <Icon />
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </>
          )

          return to ? (
            <Link key={title} to={to} className="support-categories__card">
              {content}
            </Link>
          ) : (
            <article key={title} className="support-categories__card">
              {content}
            </article>
          )
        })}
      </div>
    </section>
  )
}

function AccountIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="7" r="3" stroke="#004ac6" strokeWidth="1.5" />
      <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#004ac6" strokeWidth="1.5" />
    </svg>
  )
}

function PaymentIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="18" height="12" rx="2" stroke="#004ac6" strokeWidth="1.5" />
      <path d="M1 6h18" stroke="#004ac6" strokeWidth="1.5" />
    </svg>
  )
}

function AiIcon() {
  return (
    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="18" height="13" rx="3" stroke="#004ac6" strokeWidth="1.5" />
      <circle cx="8" cy="9.5" r="1.2" fill="#004ac6" />
      <circle cx="14" cy="9.5" r="1.2" fill="#004ac6" />
    </svg>
  )
}

function CommunityIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="2.5" stroke="#004ac6" strokeWidth="1.5" />
      <path d="M2 16c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="#004ac6" strokeWidth="1.5" />
      <circle cx="14" cy="7.5" r="2" stroke="#004ac6" strokeWidth="1.2" />
    </svg>
  )
}

function BugIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
      <path d="M8 1v3M4 4h8M3 8H1M15 8h-2M3 12H1M15 12h-2M5 17h6" stroke="#004ac6" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="5" y="4" width="6" height="10" rx="3" stroke="#004ac6" strokeWidth="1.5" />
    </svg>
  )
}

function GuideIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <path d="M2 2h6v12H3a1 1 0 0 1-1-1V2Z" stroke="#004ac6" strokeWidth="1.5" />
      <path d="M8 2h6a2 2 0 0 1 2 2v10H8V2Z" stroke="#004ac6" strokeWidth="1.5" />
    </svg>
  )
}

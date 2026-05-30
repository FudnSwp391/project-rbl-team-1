const BADGE_ICONS = {
  star: StarIcon,
  zap: ZapIcon,
  trophy: TrophyIcon,
  award: AwardIcon,
}

export default function ProfileBadgesSection({ badges }) {
  return (
    <section className="profile-section">
      <h2>
        <AwardIcon />
        Huy hiệu
      </h2>
      <div className="profile-badges">
        {badges.map((badge) => {
          const Icon = BADGE_ICONS[badge.icon] ?? StarIcon
          return (
            <article
              key={badge.id}
              className={`profile-badge${badge.earned ? '' : ' profile-badge--locked'}`}
            >
              <span className="profile-badge__icon">
                <Icon />
              </span>
              <p>{badge.name}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function StarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="m14 4 2.8 6.8L24 12l-5.5 4.8L20 24l-6-3.6L8 24l1.5-7.2L4 12l7.2-1.2L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="m16 3-9 12h7l-2 10 9-12h-7l2-10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function TrophyIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M8 5h12v5a6 6 0 0 1-12 0V5ZM5 5h3v2a4 4 0 0 1-3 3.9V5Zm15 0h3v5.9A4 4 0 0 1 20 7V5ZM11 20h6v3h-6v-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function AwardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 15 10 12l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

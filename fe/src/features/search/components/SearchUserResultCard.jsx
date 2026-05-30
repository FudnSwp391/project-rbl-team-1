import { Link } from 'react-router-dom'

export default function SearchUserResultCard({ user }) {
  const profileSlug = user.username.replace('@', '')

  return (
    <div className="search-user-card">
      <span
        className="search-user-card__avatar"
        style={{ background: user.avatarBg, color: user.textColor }}
      >
        {user.initial}
      </span>
      <div className="search-user-card__info">
        <Link to={`/profile/${profileSlug}`} className="search-user-card__name">
          {user.name}
        </Link>
        <p className="search-user-card__username">{user.username}</p>
        <span className="search-user-card__major">{user.major}</span>
      </div>
      <button type="button" className="search-user-card__follow">
        <FollowIcon />
        Theo dõi
      </button>
    </div>
  )
}

function FollowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

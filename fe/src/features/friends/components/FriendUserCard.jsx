import { Link } from 'react-router-dom'

export default function FriendUserCard({ user }) {
  return (
    <article className="friend-card">
      <span
        className="friend-card__avatar"
        style={{ background: user.avatarBg, color: user.avatarColor }}
      >
        {user.initial}
      </span>
      <div className="friend-card__info">
        <Link to={`/profile/${user.username}`} className="friend-card__username">
          {user.username}
        </Link>
        <p className="friend-card__level">
          Level: <span>{user.level}</span>
        </p>
      </div>
    </article>
  )
}

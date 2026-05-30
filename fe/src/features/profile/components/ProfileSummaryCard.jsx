import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDefaultConversationId } from '@/features/messages/messagesMockData'

export default function ProfileSummaryCard({ profile, isOwnProfile = false }) {
  const navigate = useNavigate()
  const [isFollowing, setIsFollowing] = useState(false)
  const streakPercent = Math.min(100, Math.round((profile.streakDays / profile.streakGoal) * 100))

  const handleMessage = () => {
    const conversationId = getDefaultConversationId()
    if (conversationId) {
      navigate(`/messages?conversation=${conversationId}`)
    } else {
      navigate('/messages')
    }
  }

  return (
    <section className="profile-summary">
      <button type="button" className="profile-summary__menu" aria-label="Tùy chọn">
        •••
      </button>

      <div className="profile-summary__identity">
        <span
          className="profile-summary__avatar"
          style={{ background: profile.avatarBg, color: profile.avatarColor }}
        >
          {profile.initial}
        </span>
        <h1>{profile.displayName}</h1>
        <span className="profile-summary__username">@{profile.username}</span>
        <span className="profile-summary__major">{profile.major}</span>
      </div>

      {!isOwnProfile && (
        <div className="profile-summary__actions">
          <button
            type="button"
            className={`profile-summary__btn${isFollowing ? ' profile-summary__btn--outline' : ' profile-summary__btn--primary'}`}
            onClick={() => setIsFollowing((value) => !value)}
          >
            {isFollowing ? 'Đang theo dõi' : 'Theo dõi'}
          </button>
          <button
            type="button"
            className="profile-summary__btn profile-summary__btn--outline"
            onClick={handleMessage}
          >
            Nhắn tin
          </button>
        </div>
      )}

      {isOwnProfile && (
        <button type="button" className="profile-summary__btn profile-summary__btn--outline profile-summary__btn--full">
          Chỉnh sửa hồ sơ
        </button>
      )}

      <div className="profile-summary__streak">
        <div className="profile-summary__streak-head">
          <span>Chuỗi học tập</span>
          <span>
            {profile.streakDays} / {profile.streakGoal} ngày
          </span>
        </div>
        <div className="profile-summary__progress">
          <span style={{ width: `${streakPercent}%` }} />
        </div>
        <p>{streakPercent}% hoàn thành</p>
      </div>

      <div className="profile-summary__stats">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="profile-summary__stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

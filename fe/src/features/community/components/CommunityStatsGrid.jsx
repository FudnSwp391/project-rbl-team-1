import { ACTIVITY_STATS } from '../loggedInMockData'

export default function CommunityStatsGrid() {
  return (
    <div className="community-stats">
      <div className="community-stats__label">
        <span>Hoạt động tuần này</span>
      </div>
      <div className="community-stats__grid">
        {ACTIVITY_STATS.map((stat) => (
          <div key={stat.label} className="community-stats__item">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

import fireIcon from '@/assets/icons/fire-streak.png'
import { STREAK_DATA } from '../loggedInMockData'

export default function CommunityStreakWidget() {
  return (
    <div className="community-streak">
      <div className="community-streak__head">
        <div className="community-streak__count-ring">
          <div className="community-streak__count">{STREAK_DATA.count}</div>
          <img src={fireIcon} alt="" className="community-streak__flame" aria-hidden="true" />
        </div>
        <h3>Chuỗi Tuần</h3>
        <p>{STREAK_DATA.message}</p>
      </div>
      <div className="community-streak__days">
        {STREAK_DATA.weekDays.map((day) => (
          <div key={day.label} className="community-streak__day">
            <span
              className={`community-streak__dot${day.completed ? ' community-streak__dot--done' : ''}`}
            >
              {day.completed && <FlameIcon small />}
            </span>
            <span>{day.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FlameIcon({ small = false }) {
  return (
    <svg
      width={small ? 14 : 24}
      height={small ? 14 : 24}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={small ? 'community-streak__flame-small' : 'community-streak__flame'}
    >
      <path
        d="M12 2c1 4 4 5 4 9a4 4 0 1 1-8 0c0-2 1.5-3.5 2-5 1 1.5 2 2.5 2 4a2 2 0 0 0 4 0c0-3-2-5-4-8Z"
        fill={small ? '#fff' : '#f97316'}
      />
    </svg>
  )
}

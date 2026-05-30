import fireIcon from '@/assets/icons/fire-streak.png'

export default function FireStreak({ count = 0 }) {
  return (
    <button type="button" className="app-header-logged-in__streak-btn" aria-label="Chuỗi tuần">
      <span className="streak-container">
        <img src={fireIcon} alt="" className="fire-icon" aria-hidden="true" />
        {count > 0 && <span className="streak-badge">{count}</span>}
      </span>
    </button>
  )
}

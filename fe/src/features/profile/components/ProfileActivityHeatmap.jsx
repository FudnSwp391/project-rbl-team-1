const HEATMAP_COLORS = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4']

export default function ProfileActivityHeatmap({ heatmap, activityCount }) {
  return (
    <section className="profile-section">
      <div className="profile-activity__head">
        <h2>
          <CalendarIcon />
          Hoạt động
        </h2>
        <select className="profile-activity__select" defaultValue="2025" aria-label="Chọn năm">
          <option value="2025">Năm 2025</option>
          <option value="2024">Năm 2024</option>
        </select>
      </div>

      <p className="profile-activity__count">{activityCount} hoạt động trong 6 tháng qua</p>

      <div className="profile-activity__heatmap-wrap">
        <div className="profile-activity__heatmap">
          {heatmap.map((row, rowIndex) => (
            <div key={rowIndex} className="profile-activity__column">
              {row.map((level, colIndex) => (
                <span
                  key={`${rowIndex}-${colIndex}`}
                  className={`profile-activity__cell ${HEATMAP_COLORS[level] ?? HEATMAP_COLORS[0]}`}
                  title={`Mức hoạt động ${level}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="profile-activity__legend">
        <span>Ít</span>
        {HEATMAP_COLORS.map((color) => (
          <span key={color} className={`profile-activity__cell ${color}`} />
        ))}
        <span>Nhiều</span>
      </div>
    </section>
  )
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8h14M7 2v3M13 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

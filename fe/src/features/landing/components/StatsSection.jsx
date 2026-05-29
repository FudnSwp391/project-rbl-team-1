const STATS = [
  { value: '500+', label: 'ĐỀ THI CUỐI KỲ' },
  { value: '2.000+', label: 'SINH VIÊN' },
  { value: '300+', label: 'TÀI LIỆU' },
  { value: '26', label: 'HUY HIỆU' },
]

export default function StatsSection() {
  return (
    <section className="landing-stats">
      <div className="landing-stats__gradient" aria-hidden="true" />
      <div className="landing-stats__grid">
        {STATS.map((stat) => (
          <div key={stat.label} className="landing-stat-card">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

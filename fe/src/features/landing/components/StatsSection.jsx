import Reveal from './Reveal'
import useCountUp from '../hooks/useCountUp'

const STATS = [
  { target: 500, suffix: '+', label: 'ĐỀ THI CUỐI KỲ' },
  { target: 2000, suffix: '+', label: 'SINH VIÊN', locale: true },
  { target: 300, suffix: '+', label: 'TÀI LIỆU' },
  { target: 26, suffix: '', label: 'HUY HIỆU' },
]

function StatCard({ target, suffix, label, locale, delay }) {
  const countUp = useCountUp(target, { suffix, locale })

  return (
    <Reveal delay={delay} className="landing-stat-card">
      <strong ref={countUp.ref}>{countUp.text}</strong>
      <span>{label}</span>
    </Reveal>
  )
}

export default function StatsSection() {
  return (
    <section className="landing-stats">
      <div className="landing-stats__gradient" aria-hidden="true" />
      <div className="landing-stats__grid">
        {STATS.map((stat, index) => (
          <StatCard key={stat.label} {...stat} delay={index * 80} />
        ))}
      </div>
    </section>
  )
}

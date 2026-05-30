import type { ReactNode } from 'react'

interface StatBoxProps {
  label: string
  value: string
  subtext: ReactNode
  variant: 'score' | 'correct' | 'incorrect'
}

export default function StatBox({ label, value, subtext, variant }: StatBoxProps) {
  return (
    <div className={`exam-result-stat exam-result-stat--${variant}`}>
      <span className="exam-result-stat__label">{label}</span>
      <span className="exam-result-stat__value">{value}</span>
      <span className="exam-result-stat__subtext">{subtext}</span>
    </div>
  )
}

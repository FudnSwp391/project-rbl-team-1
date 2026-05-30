import type { ReactNode } from 'react'
import './selection-card.css'

interface SelectionCardProps {
  title: string
  description: string
  icon: ReactNode
  selected?: boolean
  onSelect: () => void
}

export default function SelectionCard({
  title,
  description,
  icon,
  selected = false,
  onSelect,
}: SelectionCardProps) {
  return (
    <button
      type="button"
      className={`selection-card ${selected ? 'selection-card--selected' : ''}`.trim()}
      onClick={onSelect}
      aria-pressed={selected}
    >
      <div className="selection-card__icon-wrap">{icon}</div>
      <div className="selection-card__content">
        <div className="selection-card__header">
          <h3 className="selection-card__title">{title}</h3>
          <span className="selection-card__radio" aria-hidden="true">
            {selected ? <span className="selection-card__radio-dot" /> : null}
          </span>
        </div>
        <p className="selection-card__description">{description}</p>
      </div>
    </button>
  )
}

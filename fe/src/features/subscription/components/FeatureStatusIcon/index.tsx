import type { FeatureCellValue } from '@/features/subscription/types'

interface FeatureStatusIconProps {
  value: FeatureCellValue
}

export default function FeatureStatusIcon({ value }: FeatureStatusIconProps) {
  if (value.type === 'included') {
    return (
      <span className="subscription-status subscription-status--included" aria-label="Included">
        <CheckIcon />
      </span>
    )
  }

  if (value.type === 'excluded') {
    return (
      <span className="subscription-status subscription-status--excluded" aria-label="Not included">
        <CrossIcon />
      </span>
    )
  }

  if (value.type === 'badge') {
    return <span className="subscription-status subscription-status--badge">{value.label}</span>
  }

  return (
    <span
      className={`subscription-status subscription-status--text${
        value.tone === 'primary' ? ' subscription-status--text-primary' : ''
      }`}
    >
      {value.label}
    </span>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 10.5 8.5 14 15 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

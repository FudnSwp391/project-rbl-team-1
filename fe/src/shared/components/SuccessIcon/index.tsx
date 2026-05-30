import './success-icon.css'

export default function SuccessIcon() {
  return (
    <div className="success-icon">
      <div className="success-icon__glow" aria-hidden="true" />
      <div className="success-icon__badge">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path
            d="M8 18.5 14.5 25 28 11"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

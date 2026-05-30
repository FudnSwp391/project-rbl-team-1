export default function PaymentSuccessIcon() {
  return (
    <div className="payment-success-icon">
      <div className="payment-success-icon__glow" aria-hidden="true" />
      <div className="payment-success-icon__badge">
        <CheckIcon />
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        d="M8 18.5 14.5 25 28 11"
        stroke="#16a34a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

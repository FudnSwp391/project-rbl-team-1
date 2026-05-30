import { PAYMENT_STRINGS } from '@/features/payment/types'

export default function SecurityBadge() {
  return (
    <div className="payment-security-badge">
      <ShieldIcon />
      <div>
        <strong>{PAYMENT_STRINGS.CHECKOUT.SECURITY_TITLE}</strong>
        <p>{PAYMENT_STRINGS.CHECKOUT.SECURITY_DESCRIPTION}</p>
      </div>
    </div>
  )
}

function ShieldIcon() {
  return (
    <svg width="32" height="36" viewBox="0 0 32 36" fill="none" aria-hidden="true">
      <path
        d="M16 2 4 7v6.5c0 6.6 5.1 12.8 12 14.5 6.9-1.7 12-7.9 12-14.5V7L16 2Z"
        fill="#eff6ff"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      <path d="M11 18.5 14.5 22 21 15" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

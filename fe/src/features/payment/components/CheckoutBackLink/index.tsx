import { Link } from 'react-router-dom'
import { PAYMENT_STRINGS } from '@/features/payment/types'

interface CheckoutBackLinkProps {
  to?: string
}

export default function CheckoutBackLink({ to = '/pricing' }: CheckoutBackLinkProps) {
  return (
    <Link to={to} className="payment-checkout-back">
      <ArrowIcon />
      <span>{PAYMENT_STRINGS.CHECKOUT.BACK}</span>
    </Link>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M7.5 2.5 4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

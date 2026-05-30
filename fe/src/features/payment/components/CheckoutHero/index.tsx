import { PAYMENT_STRINGS } from '@/features/payment/types'

export default function CheckoutHero() {
  return (
    <section className="payment-checkout-hero">
      <div className="payment-checkout-hero__badge">
        <ShieldIcon />
        <span>{PAYMENT_STRINGS.CHECKOUT.BADGE}</span>
      </div>
      <h1 className="payment-checkout-hero__title">{PAYMENT_STRINGS.CHECKOUT.TITLE}</h1>
      <p className="payment-checkout-hero__description">{PAYMENT_STRINGS.CHECKOUT.DESCRIPTION}</p>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" aria-hidden="true">
      <path
        d="M7.5 1 2 3.5v3.8c0 3 2.4 5.8 5.5 6.7 3.1-.9 5.5-3.7 5.5-6.7V3.5L7.5 1Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
    </svg>
  )
}

import { SUBSCRIPTION_STRINGS } from '@/features/subscription/types'

export default function PricingHero() {
  return (
    <section className="subscription-hero">
      <div className="subscription-hero__badge">
        <SparkleIcon />
        <span>{SUBSCRIPTION_STRINGS.PAGE.BADGE}</span>
      </div>
      <h1 className="subscription-hero__title">{SUBSCRIPTION_STRINGS.PAGE.TITLE}</h1>
      <p className="subscription-hero__description">
        {SUBSCRIPTION_STRINGS.PAGE.DESCRIPTION_LINE_1}
        <br />
        {SUBSCRIPTION_STRINGS.PAGE.DESCRIPTION_LINE_2}
      </p>
    </section>
  )
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 1v2M7 11v2M1 7h2M11 7h2M3.05 3.05l1.41 1.41M9.54 9.54l1.41 1.41M3.05 10.95l1.41-1.41M9.54 4.46l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

import { SUBSCRIPTION_STRINGS, type PlanFeature, type SubscriptionPlan } from '@/features/subscription/types'
import { formatPlanPrice } from '@/features/subscription/services'

interface PricingCardProps {
  plan: SubscriptionPlan
  isLoading?: boolean
  onSelect: (planId: SubscriptionPlan['id']) => void
}

export default function PricingCard({ plan, isLoading = false, onSelect }: PricingCardProps) {
  const cardClassName = [
    'subscription-pricing-card',
    plan.variant === 'popular' ? 'subscription-pricing-card--popular' : '',
    plan.variant === 'lifetime' ? 'subscription-pricing-card--lifetime' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const buttonClassName = [
    'subscription-pricing-card__button',
    `subscription-pricing-card__button--${plan.buttonVariant}`,
  ].join(' ')

  return (
    <article className={cardClassName}>
      {plan.isPopular ? (
        <div className="subscription-pricing-card__popular-badge">
          <StarIcon />
          <span>{SUBSCRIPTION_STRINGS.PAGE.POPULAR_BADGE}</span>
        </div>
      ) : null}

      <div className="subscription-pricing-card__header">
        <div className="subscription-pricing-card__title-row">
          <h3 className={`subscription-pricing-card__title subscription-pricing-card__title--${plan.variant}`}>
            {plan.name}
          </h3>
          {plan.savingsLabel ? (
            <span
              className={`subscription-pricing-card__savings subscription-pricing-card__savings--${plan.variant}`}
            >
              {plan.savingsLabel}
            </span>
          ) : null}
        </div>
        <p className="subscription-pricing-card__duration">{plan.duration}</p>
        <p className="subscription-pricing-card__price">
          <span>{formatPlanPrice(plan.priceMonthly)} đ</span>
          <small>{SUBSCRIPTION_STRINGS.PAGE.PER_MONTH}</small>
        </p>
      </div>

      <ul className="subscription-pricing-card__features">
        {plan.features.map((feature) => (
          <PricingFeatureItem key={feature.id} feature={feature} isPopular={plan.isPopular} />
        ))}
      </ul>

      <button
        type="button"
        className={buttonClassName}
        disabled={isLoading}
        onClick={() => onSelect(plan.id)}
      >
        {plan.buttonLabel}
      </button>
    </article>
  )
}

interface PricingFeatureItemProps {
  feature: PlanFeature
  isPopular?: boolean
}

function PricingFeatureItem({ feature, isPopular = false }: PricingFeatureItemProps) {
  const highlightClass = feature.highlight
    ? ` subscription-pricing-card__feature-label--${feature.highlight}`
    : ''

  return (
    <li className="subscription-pricing-card__feature">
      <span className={`subscription-pricing-card__feature-icon${isPopular ? ' subscription-pricing-card__feature-icon--popular' : ''}`}>
        <CheckIcon />
      </span>
      <span className={`subscription-pricing-card__feature-label${highlightClass}`}>{feature.label}</span>
    </li>
  )
}

function CheckIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" aria-hidden="true">
      <path
        d="M3.5 8.5 6.8 11.8 13.5 5.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
      <path
        d="M7 0.5 8.6 4.9 13.2 5.2 9.8 8.1 10.8 12.6 7 10.3 3.2 12.6 4.2 8.1 0.8 5.2 5.4 4.9 7 0.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

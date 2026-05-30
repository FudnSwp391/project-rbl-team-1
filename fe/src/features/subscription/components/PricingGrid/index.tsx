import PricingCard from '@/features/subscription/components/PricingCard'
import type { SubscriptionPlan } from '@/features/subscription/types'

interface PricingGridProps {
  plans: SubscriptionPlan[]
  isLoading?: boolean
  onSelectPlan: (planId: SubscriptionPlan['id']) => void
}

export default function PricingGrid({ plans, isLoading = false, onSelectPlan }: PricingGridProps) {
  return (
    <div className="subscription-pricing-grid">
      {plans.map((plan) => (
        <PricingCard key={plan.id} plan={plan} isLoading={isLoading} onSelect={onSelectPlan} />
      ))}
    </div>
  )
}

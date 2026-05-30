import Spinner from '@/shared/components/Spinner'
import ComparisonTable from '@/features/subscription/components/ComparisonTable'
import PricingGrid from '@/features/subscription/components/PricingGrid'
import PricingHero from '@/features/subscription/components/PricingHero'
import SubscriptionHeader from '@/features/subscription/components/SubscriptionHeader'
import SubscriptionSidebar from '@/features/subscription/components/SubscriptionSidebar'
import useCheckoutForm from '@/features/subscription/hooks/useCheckoutForm'
import usePlanCheckout from '@/features/subscription/hooks/usePlanCheckout'
import useSubscriptionPlans from '@/features/subscription/hooks/useSubscriptionPlans'
import SubscriptionQueryProvider from '@/features/subscription/providers/SubscriptionQueryProvider'
import { SUBSCRIPTION_STRINGS, type PlanId } from '@/features/subscription/types'
import '@/features/subscription/subscription.css'

function SubscriptionPageContent() {
  const { data, isPending, isError } = useSubscriptionPlans()
  const checkoutMutation = usePlanCheckout()
  const { setValue, handleSubmit } = useCheckoutForm()

  const handleSelectPlan = (planId: PlanId) => {
    setValue('planId', planId, { shouldValidate: true })
    handleSubmit((values) => {
      checkoutMutation.mutate(values, {
        onSuccess: (response) => {
          window.location.assign(response.checkoutUrl)
        },
      })
    })()
  }

  if (isPending) {
    return (
      <div className="subscription-page subscription-page--loading">
        <Spinner size="lg" />
        <p>{SUBSCRIPTION_STRINGS.LOADING}</p>
      </div>
    )
  }

  const plans = data?.plans ?? []
  const comparisons = data?.comparisons ?? []

  return (
    <div className="subscription-page">
      <SubscriptionHeader
        userEmail={SUBSCRIPTION_STRINGS.MOCK_USER.EMAIL}
        userInitial={SUBSCRIPTION_STRINGS.MOCK_USER.INITIAL}
        notificationCount={SUBSCRIPTION_STRINGS.MOCK_USER.NOTIFICATION_COUNT}
        streakCount={SUBSCRIPTION_STRINGS.MOCK_USER.STREAK_COUNT}
      />

      <div className="subscription-page__body">
        <SubscriptionSidebar />

        <main className="subscription-page__main">
          {isError ? (
            <p className="subscription-page__error" role="alert">
              {SUBSCRIPTION_STRINGS.CHECKOUT.ERROR}
            </p>
          ) : null}

          <PricingHero />
          <PricingGrid
            plans={plans}
            isLoading={checkoutMutation.isPending}
            onSelectPlan={handleSelectPlan}
          />
          <ComparisonTable rows={comparisons} />
        </main>
      </div>
    </div>
  )
}

export default function SubscriptionPage() {
  return (
    <SubscriptionQueryProvider>
      <SubscriptionPageContent />
    </SubscriptionQueryProvider>
  )
}

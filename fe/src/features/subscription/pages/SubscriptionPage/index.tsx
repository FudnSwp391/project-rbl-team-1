import Spinner from '@/shared/components/Spinner'
import type { ReactNode } from 'react'
import AppFooter from '@/shared/layouts/AppFooter'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import useAuth from '@/shared/hooks/useAuth'
import ComparisonTable from '@/features/subscription/components/ComparisonTable'
import PricingGrid from '@/features/subscription/components/PricingGrid'
import PricingHero from '@/features/subscription/components/PricingHero'
import SubscriptionHeader from '@/features/subscription/components/SubscriptionHeader'
import useCheckoutForm from '@/features/subscription/hooks/useCheckoutForm'
import usePlanCheckout from '@/features/subscription/hooks/usePlanCheckout'
import useSubscriptionPlans from '@/features/subscription/hooks/useSubscriptionPlans'
import SubscriptionQueryProvider from '@/features/subscription/providers/SubscriptionQueryProvider'
import { SUBSCRIPTION_STRINGS, type FeatureComparisonRow, type PlanId, type SubscriptionPlan } from '@/features/subscription/types'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/subscription/subscription.css'

function SubscriptionPricingContent({
  isError,
  plans,
  comparisons,
  isCheckoutLoading,
  onSelectPlan,
}: {
  isError: boolean
  plans: SubscriptionPlan[]
  comparisons: FeatureComparisonRow[]
  isCheckoutLoading: boolean
  onSelectPlan: (planId: PlanId) => void
}) {
  return (
    <>
      {isError ? (
        <p className="subscription-page__error" role="alert">
          {SUBSCRIPTION_STRINGS.CHECKOUT.ERROR}
        </p>
      ) : null}

      <PricingHero />
      <PricingGrid plans={plans} isLoading={isCheckoutLoading} onSelectPlan={onSelectPlan} />
      <ComparisonTable rows={comparisons} />
    </>
  )
}

function LoggedInPricingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="subscription-page subscription-page--logged-in">
      <AppHeaderLoggedIn />
      <main className="subscription-page__logged-in-main">
        <div className="subscription-page__main">{children}</div>
      </main>
      <AppFooter />
    </div>
  )
}

function SubscriptionPageContent() {
  const { isLoggedIn } = useAuth()
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

  const plans = data?.plans ?? []
  const comparisons = data?.comparisons ?? []

  if (isPending) {
    if (isLoggedIn) {
      return (
        <LoggedInPricingLayout>
          <div className="subscription-page--loading">
            <Spinner size="lg" />
            <p>{SUBSCRIPTION_STRINGS.LOADING}</p>
          </div>
        </LoggedInPricingLayout>
      )
    }

    return (
      <div className="subscription-page subscription-page--loading">
        <Spinner size="lg" />
        <p>{SUBSCRIPTION_STRINGS.LOADING}</p>
      </div>
    )
  }

  if (isLoggedIn) {
    return (
      <LoggedInPricingLayout>
        <SubscriptionPricingContent
          isError={isError}
          plans={plans}
          comparisons={comparisons}
          isCheckoutLoading={checkoutMutation.isPending}
          onSelectPlan={handleSelectPlan}
        />
      </LoggedInPricingLayout>
    )
  }

  return (
    <div className="subscription-page">
      <SubscriptionHeader
        userEmail={SUBSCRIPTION_STRINGS.MOCK_USER.EMAIL}
        userInitial={SUBSCRIPTION_STRINGS.MOCK_USER.INITIAL}
        notificationCount={SUBSCRIPTION_STRINGS.MOCK_USER.NOTIFICATION_COUNT}
        streakCount={SUBSCRIPTION_STRINGS.MOCK_USER.STREAK_COUNT}
      />

      <main className="subscription-page__main subscription-page__main--guest">
        <SubscriptionPricingContent
          isError={isError}
          plans={plans}
          comparisons={comparisons}
          isCheckoutLoading={checkoutMutation.isPending}
          onSelectPlan={handleSelectPlan}
        />
      </main>
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

import Spinner from '@/shared/components/Spinner'
import type { ReactNode } from 'react'
import AppFooter from '@/shared/layouts/AppFooter'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import useAuth from '@/shared/hooks/useAuth'
import SubscriptionHeader from '@/features/subscription/components/SubscriptionHeader'
import { SUBSCRIPTION_STRINGS } from '@/features/subscription/types'
import CheckoutBackLink from '@/features/payment/components/CheckoutBackLink'
import CheckoutHero from '@/features/payment/components/CheckoutHero'
import FloatingChatButton from '@/features/payment/components/FloatingChatButton'
import OrderSummaryCard from '@/features/payment/components/OrderSummaryCard'
import PaymentGatewayCard from '@/features/payment/components/PaymentGatewayCard'
import SecurityBadge from '@/features/payment/components/SecurityBadge'
import useCopyTransactionId from '@/features/payment/hooks/useCopyTransactionId'
import usePaymentCheckout from '@/features/payment/hooks/usePaymentCheckout'
import usePaymentCheckoutQuery from '@/features/payment/hooks/usePaymentCheckoutQuery'
import usePaymentCountdown from '@/features/payment/hooks/usePaymentCountdown'
import PaymentQueryProvider from '@/features/payment/providers/PaymentQueryProvider'
import { PAYMENT_STRINGS } from '@/features/payment/types'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/payment/payment-checkout.css'
import '@/features/subscription/subscription.css'

function CheckoutMainContent({
  isError,
  data,
  formattedTime,
  onCopy,
}: {
  isError: boolean
  data: NonNullable<ReturnType<typeof usePaymentCheckout>['data']>
  formattedTime: string
  onCopy: (value: string) => void
}) {
  return (
    <>
      <CheckoutBackLink />

      {isError ? (
        <p className="payment-checkout-page__error" role="alert">
          {PAYMENT_STRINGS.CHECKOUT.ERROR}
        </p>
      ) : null}

      <CheckoutHero />

      <div className="payment-checkout-page__grid">
        <div className="payment-checkout-page__summary">
          <OrderSummaryCard order={data.order} />
          <SecurityBadge />
        </div>

        <PaymentGatewayCard
          bankTransfer={data.bankTransfer}
          countdown={formattedTime}
          onCopy={onCopy}
        />
      </div>
    </>
  )
}

function LoggedInCheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <div className="payment-checkout-page payment-checkout-page--logged-in">
      <AppHeaderLoggedIn />
      <main className="payment-checkout-page__logged-in-main">
        <div className="payment-checkout-page__main">{children}</div>
      </main>
      <AppFooter />
      <FloatingChatButton />
    </div>
  )
}

function PaymentCheckoutPageContent() {
  const { isLoggedIn } = useAuth()
  const { planId } = usePaymentCheckoutQuery()
  const { data, isPending, isError } = usePaymentCheckout(planId)
  const { copyTransactionId } = useCopyTransactionId()
  const { formattedTime } = usePaymentCountdown(data?.expiresInSeconds ?? 0)

  if (isPending || !data) {
    if (isLoggedIn) {
      return (
        <LoggedInCheckoutLayout>
          <div className="payment-checkout-page--loading">
            <Spinner size="lg" />
            <p>{PAYMENT_STRINGS.CHECKOUT.LOADING}</p>
          </div>
        </LoggedInCheckoutLayout>
      )
    }

    return (
      <div className="payment-checkout-page payment-checkout-page--loading">
        <Spinner size="lg" />
        <p>{PAYMENT_STRINGS.CHECKOUT.LOADING}</p>
      </div>
    )
  }

  if (isLoggedIn) {
    return (
      <LoggedInCheckoutLayout>
        <CheckoutMainContent
          isError={isError}
          data={data}
          formattedTime={formattedTime}
          onCopy={copyTransactionId}
        />
      </LoggedInCheckoutLayout>
    )
  }

  return (
    <div className="payment-checkout-page">
      <SubscriptionHeader
        userEmail={SUBSCRIPTION_STRINGS.MOCK_USER.EMAIL}
        userInitial={SUBSCRIPTION_STRINGS.MOCK_USER.INITIAL}
        notificationCount={SUBSCRIPTION_STRINGS.MOCK_USER.NOTIFICATION_COUNT}
        streakCount={SUBSCRIPTION_STRINGS.MOCK_USER.STREAK_COUNT}
      />

      <main className="payment-checkout-page__main payment-checkout-page__main--guest">
        <CheckoutMainContent
          isError={isError}
          data={data}
          formattedTime={formattedTime}
          onCopy={copyTransactionId}
        />
      </main>

      <FloatingChatButton />
    </div>
  )
}

export default function PaymentCheckoutPage() {
  return (
    <PaymentQueryProvider>
      <PaymentCheckoutPageContent />
    </PaymentQueryProvider>
  )
}

import Spinner from '@/shared/components/Spinner'
import SubscriptionHeader from '@/features/subscription/components/SubscriptionHeader'
import SubscriptionSidebar from '@/features/subscription/components/SubscriptionSidebar'
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
import '@/features/payment/payment-checkout.css'
import '@/features/subscription/subscription.css'

function PaymentCheckoutPageContent() {
  const { planId } = usePaymentCheckoutQuery()
  const { data, isPending, isError } = usePaymentCheckout(planId)
  const { copyTransactionId } = useCopyTransactionId()
  const { formattedTime } = usePaymentCountdown(data?.expiresInSeconds ?? 0)

  if (isPending || !data) {
    return (
      <div className="payment-checkout-page payment-checkout-page--loading">
        <Spinner size="lg" />
        <p>{PAYMENT_STRINGS.CHECKOUT.LOADING}</p>
      </div>
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

      <div className="payment-checkout-page__body">
        <SubscriptionSidebar />

        <main className="payment-checkout-page__main">
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
              onCopy={copyTransactionId}
            />
          </div>
        </main>
      </div>

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

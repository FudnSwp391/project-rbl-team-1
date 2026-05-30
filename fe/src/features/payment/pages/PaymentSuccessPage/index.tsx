import Spinner from '@/shared/components/Spinner'
import FloatingChatButton from '@/features/payment/components/FloatingChatButton'
import PaymentHeader from '@/features/payment/components/PaymentHeader'
import PaymentSidebar from '@/features/payment/components/PaymentSidebar'
import PaymentSuccessFooter from '@/features/payment/components/PaymentSuccessFooter'
import PaymentSuccessCard from '@/features/payment/components/PaymentSuccessCard'
import useCopyTransactionId from '@/features/payment/hooks/useCopyTransactionId'
import usePaymentSuccess from '@/features/payment/hooks/usePaymentSuccess'
import usePaymentSuccessQuery from '@/features/payment/hooks/usePaymentSuccessQuery'
import PaymentQueryProvider from '@/features/payment/providers/PaymentQueryProvider'
import { buildTransactionDetails } from '@/features/payment/services'
import { PAYMENT_STRINGS } from '@/features/payment/types'
import '@/features/payment/payment.css'

function PaymentSuccessPageContent() {
  const { transactionId } = usePaymentSuccessQuery()
  const { data, isPending, isError } = usePaymentSuccess(transactionId)
  const { copyTransactionId, isCopied } = useCopyTransactionId()

  if (isPending || !data) {
    return (
      <div className="payment-page payment-page--loading">
        <Spinner size="lg" />
        <p>{PAYMENT_STRINGS.PAGE.LOADING}</p>
      </div>
    )
  }

  const transactionItems = buildTransactionDetails(data)

  return (
    <div className="payment-page">
      <PaymentHeader
        username={PAYMENT_STRINGS.MOCK_USER.USERNAME}
        email={PAYMENT_STRINGS.MOCK_USER.EMAIL}
        streakCount={PAYMENT_STRINGS.MOCK_USER.STREAK_COUNT}
        notificationCount={PAYMENT_STRINGS.MOCK_USER.NOTIFICATION_COUNT}
      />

      <div className="payment-page__body">
        <PaymentSidebar messageCount={PAYMENT_STRINGS.MOCK_USER.MESSAGE_COUNT} />

        <main className="payment-page__main">
          {isError ? (
            <p className="payment-page__error" role="alert">
              {PAYMENT_STRINGS.PAGE.ERROR}
            </p>
          ) : null}

          <div className="payment-page__content">
            <PaymentSuccessCard
              transactionItems={transactionItems}
              isCopied={isCopied}
              onCopyTransactionId={copyTransactionId}
            />
            <PaymentSuccessFooter email={data.invoiceEmail} />
          </div>
        </main>
      </div>

      <FloatingChatButton />
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <PaymentQueryProvider>
      <PaymentSuccessPageContent />
    </PaymentQueryProvider>
  )
}

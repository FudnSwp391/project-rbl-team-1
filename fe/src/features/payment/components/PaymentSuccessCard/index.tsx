import PaymentSuccessActions from '@/features/payment/components/PaymentSuccessActions'
import PaymentSuccessIcon from '@/features/payment/components/PaymentSuccessIcon'
import TransactionDetails from '@/features/payment/components/TransactionDetails'
import { PAYMENT_STRINGS, type TransactionDetailItem } from '@/features/payment/types'

interface PaymentSuccessCardProps {
  transactionItems: TransactionDetailItem[]
  isCopied?: boolean
  onCopyTransactionId?: (value: string) => void
}

export default function PaymentSuccessCard({
  transactionItems,
  isCopied = false,
  onCopyTransactionId,
}: PaymentSuccessCardProps) {
  return (
    <div className="payment-success-card">
      <div className="payment-success-card__hero">
        <PaymentSuccessIcon />
        <h1 className="payment-success-card__title">{PAYMENT_STRINGS.PAGE.TITLE}</h1>
        <p className="payment-success-card__description">
          {PAYMENT_STRINGS.PAGE.DESCRIPTION_LINE_1}
          <br />
          {PAYMENT_STRINGS.PAGE.DESCRIPTION_LINE_2}
          <br />
          {PAYMENT_STRINGS.PAGE.DESCRIPTION_LINE_3}
        </p>
      </div>

      <TransactionDetails
        items={transactionItems}
        isCopied={isCopied}
        onCopyTransactionId={onCopyTransactionId}
      />

      <PaymentSuccessActions />
    </div>
  )
}

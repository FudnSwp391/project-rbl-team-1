import TransactionDetailRow from '@/features/payment/components/TransactionDetailRow'
import { PAYMENT_STRINGS, type TransactionDetailItem } from '@/features/payment/types'

interface TransactionDetailsProps {
  items: TransactionDetailItem[]
  isCopied?: boolean
  onCopyTransactionId?: (value: string) => void
}

export default function TransactionDetails({
  items,
  isCopied = false,
  onCopyTransactionId,
}: TransactionDetailsProps) {
  return (
    <section className="payment-transaction-details">
      <h2 className="payment-transaction-details__title">{PAYMENT_STRINGS.PAGE.TRANSACTION_TITLE}</h2>
      <div className="payment-transaction-details__list">
        {items.map((item) => (
          <TransactionDetailRow
            key={item.id}
            item={item}
            isCopied={isCopied}
            onCopy={onCopyTransactionId}
          />
        ))}
      </div>
    </section>
  )
}

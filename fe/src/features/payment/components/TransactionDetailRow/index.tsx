import type { TransactionDetailItem } from '@/features/payment/types'

interface TransactionDetailRowProps {
  item: TransactionDetailItem
  isCopied?: boolean
  onCopy?: (value: string) => void
}

export default function TransactionDetailRow({
  item,
  isCopied = false,
  onCopy,
}: TransactionDetailRowProps) {
  const valueClassName = [
    'payment-transaction-row__value',
    item.tone ? `payment-transaction-row__value--${item.tone}` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="payment-transaction-row">
      <span className="payment-transaction-row__label">{item.label}</span>

      <div className="payment-transaction-row__value-wrap">
        {item.icon === 'payos' ? <PayOsIcon /> : null}

        {item.copyable ? (
          <div className="payment-transaction-row__copy-group">
            <code className={valueClassName}>{item.value}</code>
            <button
              type="button"
              className="payment-transaction-row__copy-button"
              aria-label={isCopied ? 'Đã sao chép' : 'Sao chép mã giao dịch'}
              onClick={() => onCopy?.(item.value)}
            >
              <CopyIcon />
            </button>
          </div>
        ) : (
          <span className={valueClassName}>{item.value}</span>
        )}
      </div>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
      <rect x="3" y="1" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="1" y="3" width="6" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function PayOsIcon() {
  return (
    <span className="payment-transaction-row__payos-icon" aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="8" height="8" rx="1" fill="#2563eb" />
        <rect x="13" y="3" width="8" height="8" rx="1" fill="#16a34a" />
        <rect x="3" y="13" width="8" height="8" rx="1" fill="#f97316" />
        <rect x="13" y="13" width="8" height="8" rx="1" fill="#8b5cf6" />
      </svg>
    </span>
  )
}

import { PAYMENT_STRINGS } from '@/features/payment/types'

interface CopyableFieldProps {
  label: string
  value: string
  tone?: 'default' | 'primary' | 'highlight'
  onCopy: (value: string) => void
}

export default function CopyableField({
  label,
  value,
  tone = 'default',
  onCopy,
}: CopyableFieldProps) {
  return (
    <div className="payment-copy-field">
      <span className="payment-copy-field__label">{label}</span>
      <div className={`payment-copy-field__box payment-copy-field__box--${tone}`}>
        <span className={`payment-copy-field__value payment-copy-field__value--${tone}`}>{value}</span>
        <button
          type="button"
          className="payment-copy-field__button"
          aria-label={`${PAYMENT_STRINGS.CHECKOUT.COPY_LABEL} ${label}`}
          onClick={() => onCopy(value)}
        >
          <CopyIcon />
        </button>
      </div>
    </div>
  )
}

function CopyIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
      <rect x="3" y="1" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="1" y="4" width="9" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

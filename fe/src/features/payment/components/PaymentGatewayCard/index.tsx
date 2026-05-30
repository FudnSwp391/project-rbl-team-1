import { Link } from 'react-router-dom'
import BankTransferPanel from '@/features/payment/components/BankTransferPanel'
import QrCodePanel from '@/features/payment/components/QrCodePanel'
import { PAYMENT_STRINGS, type PaymentCheckoutBankTransfer } from '@/features/payment/types'

interface PaymentGatewayCardProps {
  bankTransfer: PaymentCheckoutBankTransfer
  countdown: string
  onCopy: (value: string) => void
}

export default function PaymentGatewayCard({
  bankTransfer,
  countdown,
  onCopy,
}: PaymentGatewayCardProps) {
  return (
    <section className="payment-gateway-card">
      <div className="payment-gateway-card__header">
        <div className="payment-gateway-card__title">
          <PayOsIcon />
          <span>{PAYMENT_STRINGS.CHECKOUT.GATEWAY_TITLE}</span>
        </div>
        <div className="payment-gateway-card__timer">
          <ClockIcon />
          <span>{countdown}</span>
        </div>
      </div>

      <div className="payment-gateway-card__body">
        <QrCodePanel />
        <BankTransferPanel bankTransfer={bankTransfer} onCopy={onCopy} />
      </div>

      <div className="payment-gateway-card__footer">
        <button type="button" className="payment-gateway-card__primary-button">
          <PhoneIcon />
          {PAYMENT_STRINGS.CHECKOUT.OPEN_BANK_APP}
        </button>
        <Link to="/pricing" className="payment-gateway-card__cancel-link">
          {PAYMENT_STRINGS.CHECKOUT.CANCEL_PAYMENT}
        </Link>
      </div>
    </section>
  )
}

function PayOsIcon() {
  return (
    <span className="payment-gateway-card__payos-icon" aria-hidden="true">
      P
    </span>
  )
}

function ClockIcon() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
      <circle cx="6" cy="7" r="5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 4.5V7l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" aria-hidden="true">
      <rect x="5" y="1" width="9" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 14h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

import { PAYMENT_STRINGS } from '@/features/payment/types'

interface PaymentSuccessFooterProps {
  email: string
}

export default function PaymentSuccessFooter({ email }: PaymentSuccessFooterProps) {
  return (
    <p className="payment-success-footer">
      {PAYMENT_STRINGS.PAGE.INVOICE_PREFIX}
      <strong>{email}</strong>
    </p>
  )
}

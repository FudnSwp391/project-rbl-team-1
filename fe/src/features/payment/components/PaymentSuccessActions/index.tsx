import { Link } from 'react-router-dom'
import { PAYMENT_STRINGS } from '@/features/payment/types'

interface PaymentSuccessActionsProps {
  homeHref?: string
  examsHref?: string
}

export default function PaymentSuccessActions({
  homeHref = '/',
  examsHref = '/exams',
}: PaymentSuccessActionsProps) {
  return (
    <div className="payment-success-actions">
      <Link to={homeHref} className="payment-success-actions__button payment-success-actions__button--primary">
        {PAYMENT_STRINGS.ACTIONS.HOME}
      </Link>
      <Link
        to={examsHref}
        className="payment-success-actions__button payment-success-actions__button--outline"
      >
        {PAYMENT_STRINGS.ACTIONS.EXPLORE_EXAMS}
      </Link>
    </div>
  )
}

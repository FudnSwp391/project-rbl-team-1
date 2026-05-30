import { formatCheckoutAmount } from '@/features/payment/services'
import { PAYMENT_STRINGS, type PaymentCheckoutOrder } from '@/features/payment/types'

interface OrderSummaryCardProps {
  order: PaymentCheckoutOrder
}

export default function OrderSummaryCard({ order }: OrderSummaryCardProps) {
  return (
    <section className="payment-order-summary">
      <h2 className="payment-order-summary__title">{PAYMENT_STRINGS.CHECKOUT.ORDER_TITLE}</h2>

      <div className="payment-order-summary__plan">
        <div>
          <h3>{order.planName}</h3>
          <p>{order.description}</p>
        </div>
        <span className="payment-order-summary__badge">{PAYMENT_STRINGS.CHECKOUT.PREMIUM_BADGE}</span>
      </div>

      <div className="payment-order-summary__breakdown">
        <div className="payment-order-summary__row">
          <span>{PAYMENT_STRINGS.CHECKOUT.ORIGINAL_PRICE_LABEL}</span>
          <span>{formatCheckoutAmount(order.originalPrice)}</span>
        </div>
        <div className="payment-order-summary__row">
          <span>{PAYMENT_STRINGS.CHECKOUT.DISCOUNT_LABEL}</span>
          <span className="payment-order-summary__discount">{order.discountLabel}</span>
        </div>
        <div className="payment-order-summary__row">
          <span>{PAYMENT_STRINGS.CHECKOUT.DETAIL_LABEL}</span>
          <span>{order.priceDetail}</span>
        </div>
      </div>

      <div className="payment-order-summary__total">
        <span>{PAYMENT_STRINGS.CHECKOUT.TOTAL_LABEL}</span>
        <strong>{formatCheckoutAmount(order.totalAmount)}</strong>
      </div>
    </section>
  )
}

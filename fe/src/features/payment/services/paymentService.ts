import { fetchPaymentSuccess } from '@/features/payment/api'
import { PAYMENT_STRINGS, type PaymentSuccessData } from '@/features/payment/types'

const DEFAULT_PAYMENT_SUCCESS: PaymentSuccessData = {
  planName: 'Gói 1 Học kỳ (8 tháng)',
  totalAmount: 280000,
  transactionId: 'SEH_2024_0522_CONFIRMED',
  paymentMethod: 'payos',
  paymentMethodLabel: 'PayOS (VietQR)',
  invoiceEmail: PAYMENT_STRINGS.MOCK_USER.EMAIL,
}

export const getDefaultPaymentSuccessData = (): PaymentSuccessData => ({
  ...DEFAULT_PAYMENT_SUCCESS,
})

export const normalizePaymentSuccessData = (
  payload: Partial<PaymentSuccessData> | undefined,
): PaymentSuccessData => {
  const fallback = getDefaultPaymentSuccessData()

  return {
    planName: payload?.planName || fallback.planName,
    totalAmount: payload?.totalAmount ?? fallback.totalAmount,
    transactionId: payload?.transactionId || fallback.transactionId,
    paymentMethod: payload?.paymentMethod || fallback.paymentMethod,
    paymentMethodLabel: payload?.paymentMethodLabel || fallback.paymentMethodLabel,
    invoiceEmail: payload?.invoiceEmail || fallback.invoiceEmail,
  }
}

export const loadPaymentSuccessData = async (
  transactionId?: string,
): Promise<PaymentSuccessData> => {
  try {
    const response = await Promise.race([
      fetchPaymentSuccess(transactionId),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Payment success API timeout')), 3000)
      }),
    ])
    return normalizePaymentSuccessData(response.data)
  } catch {
    return getDefaultPaymentSuccessData()
  }
}

export const formatPaymentAmount = (amount: number): string =>
  `${new Intl.NumberFormat('vi-VN').format(amount)} đ`

export const buildTransactionDetails = (data: PaymentSuccessData) => [
  {
    id: 'plan',
    label: PAYMENT_STRINGS.TRANSACTION.PLAN_LABEL,
    value: data.planName,
    tone: 'default' as const,
  },
  {
    id: 'total',
    label: PAYMENT_STRINGS.TRANSACTION.TOTAL_LABEL,
    value: formatPaymentAmount(data.totalAmount),
    tone: 'primary' as const,
  },
  {
    id: 'transaction-id',
    label: PAYMENT_STRINGS.TRANSACTION.TRANSACTION_ID_LABEL,
    value: data.transactionId,
    tone: 'mono' as const,
    copyable: true,
  },
  {
    id: 'method',
    label: PAYMENT_STRINGS.TRANSACTION.METHOD_LABEL,
    value: data.paymentMethodLabel,
    tone: 'default' as const,
    icon: 'payos' as const,
  },
]

import { fetchPaymentCheckout } from '@/features/payment/api'
import { PAYMENT_STRINGS, type PaymentCheckoutData } from '@/features/payment/types'

const DEFAULT_CHECKOUT: PaymentCheckoutData = {
  order: {
    planName: 'Gói 1 Học kỳ (8 tháng)',
    description: 'Học tập không giới hạn trong 240 ngày.',
    originalPrice: 395000,
    discountLabel: '- Tiết kiệm 29%',
    priceDetail: '35.000 đ/tháng x 8',
    totalAmount: 280000,
  },
  bankTransfer: {
    bankName: 'MB Bank (Quân Đội)',
    accountNumber: '123456789',
    accountName: 'SEHUB PLATFORM',
    transferContent: 'SEHUB_2024_0522',
  },
  expiresInSeconds: 892,
}

export const getDefaultPaymentCheckoutData = (): PaymentCheckoutData => ({
  ...DEFAULT_CHECKOUT,
  order: { ...DEFAULT_CHECKOUT.order },
  bankTransfer: { ...DEFAULT_CHECKOUT.bankTransfer },
})

export const normalizePaymentCheckoutData = (
  payload: Partial<PaymentCheckoutData> | undefined,
): PaymentCheckoutData => {
  const fallback = getDefaultPaymentCheckoutData()

  return {
    order: {
      planName: payload?.order?.planName || fallback.order.planName,
      description: payload?.order?.description || fallback.order.description,
      originalPrice: payload?.order?.originalPrice ?? fallback.order.originalPrice,
      discountLabel: payload?.order?.discountLabel || fallback.order.discountLabel,
      priceDetail: payload?.order?.priceDetail || fallback.order.priceDetail,
      totalAmount: payload?.order?.totalAmount ?? fallback.order.totalAmount,
    },
    bankTransfer: {
      bankName: payload?.bankTransfer?.bankName || fallback.bankTransfer.bankName,
      accountNumber: payload?.bankTransfer?.accountNumber || fallback.bankTransfer.accountNumber,
      accountName: payload?.bankTransfer?.accountName || fallback.bankTransfer.accountName,
      transferContent:
        payload?.bankTransfer?.transferContent || fallback.bankTransfer.transferContent,
    },
    expiresInSeconds: payload?.expiresInSeconds ?? fallback.expiresInSeconds,
  }
}

export const loadPaymentCheckoutData = async (planId?: string): Promise<PaymentCheckoutData> => {
  try {
    const response = await Promise.race([
      fetchPaymentCheckout(planId),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Payment checkout API timeout')), 3000)
      }),
    ])
    return normalizePaymentCheckoutData(response.data)
  } catch {
    return getDefaultPaymentCheckoutData()
  }
}

export const formatCheckoutAmount = (amount: number): string =>
  `${new Intl.NumberFormat('vi-VN').format(amount)} đ`

export const formatCountdown = (totalSeconds: number): string => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { paymentSuccessQuerySchema } from '@/features/payment/validation'

export default function usePaymentSuccessQuery() {
  const [searchParams] = useSearchParams()

  return useMemo(() => {
    const parsed = paymentSuccessQuerySchema.safeParse({
      transactionId: searchParams.get('transactionId') ?? undefined,
      planId: searchParams.get('planId') ?? undefined,
    })

    if (!parsed.success) {
      return { transactionId: undefined, planId: undefined }
    }

    return parsed.data
  }, [searchParams])
}

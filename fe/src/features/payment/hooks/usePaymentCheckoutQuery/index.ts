import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { paymentCheckoutQuerySchema } from '@/features/payment/validation'

export default function usePaymentCheckoutQuery() {
  const [searchParams] = useSearchParams()

  return useMemo(() => {
    const parsed = paymentCheckoutQuerySchema.safeParse({
      planId: searchParams.get('planId') ?? undefined,
    })

    if (!parsed.success) {
      return { planId: undefined }
    }

    return parsed.data
  }, [searchParams])
}

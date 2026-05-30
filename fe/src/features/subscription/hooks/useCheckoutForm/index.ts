import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PLAN_IDS } from '@/features/subscription/types'
import { checkoutSchema, type CheckoutFormValues } from '@/features/subscription/validation'

export default function useCheckoutForm() {
  return useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      planId: PLAN_IDS.TRIAL,
    },
    mode: 'onSubmit',
  })
}

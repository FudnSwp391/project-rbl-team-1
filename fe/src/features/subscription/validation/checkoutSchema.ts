import { z } from 'zod'
import { PLAN_IDS } from '@/features/subscription/types'

export const checkoutSchema = z.object({
  planId: z.enum([PLAN_IDS.TRIAL, PLAN_IDS.SEMESTER, PLAN_IDS.LIFETIME], {
    required_error: 'Vui lòng chọn gói đăng ký',
  }),
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>

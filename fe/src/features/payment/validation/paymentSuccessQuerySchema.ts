import { z } from 'zod'

export const paymentSuccessQuerySchema = z.object({
  transactionId: z.string().min(1).optional(),
  planId: z.string().min(1).optional(),
})

export type PaymentSuccessQueryValues = z.infer<typeof paymentSuccessQuerySchema>

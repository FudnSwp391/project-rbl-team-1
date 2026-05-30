import { z } from 'zod'

export const paymentCheckoutQuerySchema = z.object({
  planId: z.string().min(1).optional(),
})

export type PaymentCheckoutQueryValues = z.infer<typeof paymentCheckoutQuerySchema>

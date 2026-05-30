import { z } from 'zod'

export const forgotPasswordSchema = z.object({
  method: z.enum(['email', 'phone'], {
    required_error: 'Vui lòng chọn phương thức xác minh',
  }),
})

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

import { z } from 'zod'

export const forgotPasswordOtpSchema = z.object({
  otp: z
    .string()
    .length(6, 'Mã xác minh phải gồm 6 chữ số')
    .regex(/^\d{6}$/, 'Mã xác minh chỉ được chứa số'),
})

export type ForgotPasswordOtpFormValues = z.infer<typeof forgotPasswordOtpSchema>

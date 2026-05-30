import { z } from 'zod'

export const forgotPasswordVerifyEmailSchema = z.object({
  contact: z
    .string()
    .min(1, 'Email không được để trống')
    .email('Email không hợp lệ'),
})

export const forgotPasswordVerifyPhoneSchema = z.object({
  contact: z
    .string()
    .min(1, 'Số điện thoại không được để trống')
    .regex(/^(0|\+84)[0-9]{9,10}$/, 'Số điện thoại không hợp lệ'),
})

export type ForgotPasswordVerifyEmailValues = z.infer<typeof forgotPasswordVerifyEmailSchema>
export type ForgotPasswordVerifyPhoneValues = z.infer<typeof forgotPasswordVerifyPhoneSchema>
export type ForgotPasswordVerifyFormValues = ForgotPasswordVerifyEmailValues

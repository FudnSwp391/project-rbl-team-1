import { z } from 'zod'

export const aiQuestionSchema = z.object({
  question: z
    .string()
    .trim()
    .min(1, 'Câu hỏi không được để trống')
    .max(500, 'Câu hỏi không được vượt quá 500 ký tự'),
})

export type AiQuestionSchemaValues = z.infer<typeof aiQuestionSchema>

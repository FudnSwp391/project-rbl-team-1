import { z } from 'zod'

export const commentSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, 'Nội dung bình luận không được để trống')
    .max(500, 'Bình luận không được vượt quá 500 ký tự'),
})

export type CommentSchemaValues = z.infer<typeof commentSchema>

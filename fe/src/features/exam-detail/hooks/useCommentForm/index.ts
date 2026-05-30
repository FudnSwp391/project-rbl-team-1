import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { commentSchema, type CommentSchemaValues } from '@/features/exam-detail/validation'

export default function useCommentForm(onSubmit: (values: CommentSchemaValues) => void) {
  const form = useForm<CommentSchemaValues>({
    resolver: zodResolver(commentSchema),
    defaultValues: { content: '' },
  })

  const handleSubmit = form.handleSubmit((values) => {
    onSubmit(values)
    form.reset()
  })

  return {
    register: form.register,
    handleSubmit,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting,
  }
}

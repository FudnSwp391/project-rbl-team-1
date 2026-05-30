import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { aiQuestionSchema, type AiQuestionSchemaValues } from '@/features/exam-detail/validation'

export default function useAiQuestionForm(onSubmit: (values: AiQuestionSchemaValues) => void) {
  const form = useForm<AiQuestionSchemaValues>({
    resolver: zodResolver(aiQuestionSchema),
    defaultValues: { question: '' },
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

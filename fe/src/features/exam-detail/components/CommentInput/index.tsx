import useCommentForm from '@/features/exam-detail/hooks/useCommentForm'
import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'
import type { CommentFormValues } from '@/features/exam-detail/types'

interface CommentInputProps {
  onSubmit: (values: CommentFormValues) => void
}

export default function CommentInput({ onSubmit }: CommentInputProps) {
  const { register, handleSubmit, errors } = useCommentForm(onSubmit)

  return (
    <form className="comment-input" onSubmit={handleSubmit}>
      <div className="comment-input__field">
        <textarea
          {...register('content')}
          className="comment-input__textarea"
          placeholder={EXAM_DETAIL_STRINGS.COMMENTS.PLACEHOLDER}
          rows={3}
          aria-invalid={Boolean(errors.content)}
        />
        <button type="submit" className="comment-input__submit" aria-label={EXAM_DETAIL_STRINGS.COMMENTS.SEND}>
          <SendIcon />
        </button>
      </div>
      {errors.content ? (
        <p className="comment-input__error" role="alert">
          {errors.content.message}
        </p>
      ) : null}
    </form>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" aria-hidden="true">
      <path d="M1 1.5 15 6.5 1 12V8l10-2.5L1 3V1.5Z" fill="currentColor" />
    </svg>
  )
}

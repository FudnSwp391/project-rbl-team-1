import useAiQuestionForm from '@/features/exam-detail/hooks/useAiQuestionForm'
import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface AiChatInputProps {
  usedTokens: number
  totalTokens: number
  onSubmit: (values: { question: string }) => void
}

export default function AiChatInput({ usedTokens, totalTokens, onSubmit }: AiChatInputProps) {
  const { register, handleSubmit, errors } = useAiQuestionForm(onSubmit)

  return (
    <form className="ai-chat-input" onSubmit={handleSubmit}>
      <div className="ai-chat-input__field">
        <span className="ai-chat-input__icon" aria-hidden="true">
          <SparkleIcon />
        </span>
        <input
          {...register('question')}
          type="text"
          className="ai-chat-input__input"
          placeholder={EXAM_DETAIL_STRINGS.AI.CHAT_PLACEHOLDER}
          aria-invalid={Boolean(errors.question)}
        />
        <span className="ai-chat-input__tokens">
          {EXAM_DETAIL_STRINGS.AI.TOKENS(usedTokens, totalTokens)}
        </span>
        <button type="submit" className="ai-chat-input__submit" aria-label={EXAM_DETAIL_STRINGS.AI.SEND}>
          <SendIcon />
        </button>
      </div>
      {errors.question ? (
        <p className="ai-chat-input__error" role="alert">
          {errors.question.message}
        </p>
      ) : null}
    </form>
  )
}

function SparkleIcon() {
  return (
    <svg width="17" height="15" viewBox="0 0 17 15" fill="none" aria-hidden="true">
      <path
        d="M8.5 0 9.6 5.4 15 6.5 9.6 7.6 8.5 13 7.4 7.6 2 6.5l5.4-1.1L8.5 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" aria-hidden="true">
      <path d="M1 1.5 15 6.5 1 12V8l10-2.5L1 3V1.5Z" fill="currentColor" />
    </svg>
  )
}

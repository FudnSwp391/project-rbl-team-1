import ResultOptionItem from '@/features/exam-result/components/ResultOptionItem'
import ViewExplanationButton from '@/features/exam-result/components/ViewExplanationButton'
import type { ResultQuestion } from '@/features/exam-result/types'
import { EXAM_RESULT_STRINGS } from '@/features/exam-result/types'

interface ResultQuestionCardProps {
  question: ResultQuestion
  onViewExplanation?: (questionId: string) => void
}

export default function ResultQuestionCard({
  question,
  onViewExplanation,
}: ResultQuestionCardProps) {
  const isCorrect = question.status === 'correct'
  const statusLabel = isCorrect
    ? EXAM_RESULT_STRINGS.QUESTION.CORRECT
    : EXAM_RESULT_STRINGS.QUESTION.INCORRECT

  return (
    <article
      className={`result-question-card result-question-card--${question.status}`}
    >
      <div className="result-question-card__header">
        <div className="result-question-card__title-group">
          <span
            className={`result-question-card__number result-question-card__number--${question.status}`}
          >
            {question.number}
          </span>
          <h3 className="result-question-card__text">{question.text}</h3>
        </div>

        <span
          className={`result-question-card__badge result-question-card__badge--${question.status}`}
        >
          {isCorrect ? <CheckIcon /> : <CloseIcon />}
          {statusLabel}
        </span>
      </div>

      <div className="result-question-card__options">
        {question.options.map((option) => (
          <ResultOptionItem key={option.id} option={option} />
        ))}
      </div>

      <ViewExplanationButton onClick={() => onViewExplanation?.(question.id)} />
    </article>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2.5 6 5 8.5 9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M3 3 9 9M9 3 3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

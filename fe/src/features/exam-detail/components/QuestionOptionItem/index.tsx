import type { QuestionOption } from '@/features/exam-detail/types'

interface QuestionOptionItemProps {
  option: QuestionOption
}

export default function QuestionOptionItem({ option }: QuestionOptionItemProps) {
  const className = option.isCorrect
    ? 'question-option question-option--correct'
    : 'question-option'

  return (
    <div className={className}>
      <div className="question-option__content">
        <span className="question-option__badge">{option.label}</span>
        <span className="question-option__text">{option.text}</span>
      </div>
      {option.isCorrect ? (
        <span className="question-option__check" aria-label="Đáp án đúng">
          <CheckIcon />
        </span>
      ) : null}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#22c55e" />
      <path
        d="M6 10.2 8.8 13 14 7.5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

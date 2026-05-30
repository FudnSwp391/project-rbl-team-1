import type { ResultOption } from '@/features/exam-result/types'
import { EXAM_RESULT_STRINGS } from '@/features/exam-result/types'

interface ResultOptionItemProps {
  option: ResultOption
}

export default function ResultOptionItem({ option }: ResultOptionItemProps) {
  const className = `result-option result-option--${option.state}`

  const sublabel =
    option.sublabel === 'YOUR_CHOICE'
      ? EXAM_RESULT_STRINGS.QUESTION.YOUR_CHOICE
      : option.sublabel === 'CORRECT_ANSWER'
        ? EXAM_RESULT_STRINGS.QUESTION.CORRECT_ANSWER
        : option.sublabel

  return (
    <div className={className}>
      <span className="result-option__badge">{option.label}</span>
      <div className="result-option__content">
        <span className="result-option__text">{option.text}</span>
        {sublabel ? <span className="result-option__sublabel">{sublabel}</span> : null}
      </div>
    </div>
  )
}

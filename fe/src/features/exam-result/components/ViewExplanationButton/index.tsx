import { EXAM_RESULT_STRINGS } from '@/features/exam-result/types'

interface ViewExplanationButtonProps {
  onClick?: () => void
}

export default function ViewExplanationButton({ onClick }: ViewExplanationButtonProps) {
  return (
    <button type="button" className="result-explanation-button" onClick={onClick}>
      <SparkleIcon />
      <span>{EXAM_RESULT_STRINGS.QUESTION.VIEW_EXPLANATION}</span>
    </button>
  )
}

function SparkleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 2 12.5 8.5 19 10l-6.5 1.5L11 18l-1.5-6.5L3 10l6.5-1.5L11 2Z"
        fill="currentColor"
      />
    </svg>
  )
}

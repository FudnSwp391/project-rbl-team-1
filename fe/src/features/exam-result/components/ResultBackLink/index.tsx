import { Link } from 'react-router-dom'
import { EXAM_RESULT_STRINGS } from '@/features/exam-result/types'

interface ResultBackLinkProps {
  to?: string
}

export default function ResultBackLink({ to = '/exams' }: ResultBackLinkProps) {
  return (
    <Link to={to} className="exam-result-back">
      <ArrowIcon />
      <span>{EXAM_RESULT_STRINGS.BACK}</span>
    </Link>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

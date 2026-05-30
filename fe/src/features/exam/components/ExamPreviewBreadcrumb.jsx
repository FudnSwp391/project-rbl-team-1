import { Link } from 'react-router-dom'

export default function ExamPreviewBreadcrumb({ subjectCode }) {
  return (
    <Link to={`/exams/${subjectCode.toLowerCase()}`} className="exam-detail__back">
      <BackIcon />
      Quay lại
    </Link>
  )
}

function BackIcon() {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
      <path d="M6.5 1.5 2 6l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface ExamQuestionHeaderProps {
  examCode: string
  onStartExam?: () => void
  startVariant?: 'primary' | 'success'
}

export default function ExamQuestionHeader({
  examCode,
  onStartExam,
  startVariant = 'primary',
}: ExamQuestionHeaderProps) {
  const startClassName =
    startVariant === 'success'
      ? 'exam-question-header__start exam-question-header__start--success'
      : 'exam-question-header__start'

  return (
    <div className="exam-question-header">
      <div className="exam-question-header__info">
        <h2 className="exam-question-header__title">{examCode}</h2>
        <p className="exam-question-header__subtitle">{EXAM_DETAIL_STRINGS.QUESTION.SUBTITLE}</p>
      </div>
      <button type="button" className={startClassName} onClick={onStartExam}>
        <PlayIcon />
        <span>{EXAM_DETAIL_STRINGS.QUESTION.START}</span>
      </button>
    </div>
  )
}

function PlayIcon() {
  return (
    <svg width="11" height="14" viewBox="0 0 11 14" fill="none" aria-hidden="true">
      <path d="M1 1.5 10 7 1 12.5V1.5Z" fill="currentColor" />
    </svg>
  )
}

import type { ExamInfo } from '@/features/exam-detail/types'
import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface ExamInfoBarProps {
  examInfo: ExamInfo
}

export default function ExamInfoBar({ examInfo }: ExamInfoBarProps) {
  const fields = [
    { label: EXAM_DETAIL_STRINGS.EXAM_INFO.EXAM_CODE, value: examInfo.examCode },
    { label: EXAM_DETAIL_STRINGS.EXAM_INFO.SUBJECT_CODE, value: examInfo.subjectCode },
    { label: EXAM_DETAIL_STRINGS.EXAM_INFO.EXAM_TYPE, value: examInfo.examType },
    {
      label: EXAM_DETAIL_STRINGS.EXAM_INFO.TOTAL_QUESTIONS,
      value: String(examInfo.totalQuestions),
    },
  ]

  return (
    <section className="exam-info-bar">
      <h1 className="exam-info-bar__title">{EXAM_DETAIL_STRINGS.EXAM_INFO.TITLE}</h1>
      <div className="exam-info-bar__grid">
        {fields.map((field) => (
          <div key={field.label} className="exam-info-bar__field">
            <span className="exam-info-bar__label">{field.label}</span>
            <span className="exam-info-bar__value">{field.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

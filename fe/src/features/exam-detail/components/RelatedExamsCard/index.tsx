import type { RelatedExam } from '@/features/exam-detail/types'
import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface RelatedExamsCardProps {
  exams: RelatedExam[]
}

export default function RelatedExamsCard({ exams }: RelatedExamsCardProps) {
  return (
    <section className="related-exams-card">
      <div className="related-exams-card__header">
        <h3 className="related-exams-card__title">{EXAM_DETAIL_STRINGS.RELATED.TITLE}</h3>
        <button type="button" className="related-exams-card__view-more">
          {EXAM_DETAIL_STRINGS.RELATED.VIEW_MORE}
        </button>
      </div>

      {exams.length === 0 ? (
        <div className="related-exams-card__empty">
          <DocumentIcon />
          <p>{EXAM_DETAIL_STRINGS.RELATED.EMPTY}</p>
        </div>
      ) : (
        <ul className="related-exams-card__list">
          {exams.map((exam) => (
            <li key={exam.id} className="related-exams-card__item">
              <span>{exam.title}</span>
              <span>{exam.subjectCode}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function DocumentIcon() {
  return (
    <svg width="32" height="48" viewBox="0 0 32 48" fill="none" aria-hidden="true">
      <path
        d="M8 2h10l8 8v34a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z"
        stroke="#c3c6d7"
        strokeWidth="2"
      />
      <path d="M18 2v8h8" stroke="#c3c6d7" strokeWidth="2" />
      <path d="M10 22h12M10 28h12M10 34h8" stroke="#c3c6d7" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

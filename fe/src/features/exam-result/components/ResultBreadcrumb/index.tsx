import { EXAM_RESULT_STRINGS } from '@/features/exam-result/types'

export default function ResultBreadcrumb() {
  const items = [
    { label: EXAM_RESULT_STRINGS.BREADCRUMB.SUBJECT },
    { label: EXAM_RESULT_STRINGS.BREADCRUMB.COURSE },
    { label: EXAM_RESULT_STRINGS.BREADCRUMB.RESULT, isActive: true },
  ]

  return (
    <nav className="exam-result-breadcrumb" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={item.label} className="exam-result-breadcrumb__segment">
          {index > 0 ? <span className="exam-result-breadcrumb__separator">/</span> : null}
          <span
            className={
              item.isActive
                ? 'exam-result-breadcrumb__item exam-result-breadcrumb__item--active'
                : 'exam-result-breadcrumb__item'
            }
          >
            {item.label}
          </span>
        </span>
      ))}
    </nav>
  )
}

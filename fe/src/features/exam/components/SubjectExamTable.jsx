import { Link } from 'react-router-dom'

export default function SubjectExamTable({ exams, subjectCode }) {
  if (exams.length === 0) {
    return (
      <div className="subject-exam-table subject-exam-table--empty">
        <p>Chưa có đề thi cho môn này.</p>
      </div>
    )
  }

  return (
    <div className="subject-exam-table">
      <div className="subject-exam-table__head">
        <span>Mã đề</span>
        <span>Loại đề</span>
        <span>Số câu hỏi</span>
      </div>

      <ul className="subject-exam-table__body">
        {exams.map((exam) => (
          <li key={exam.id}>
            <Link
              to={`/exams/${subjectCode.toLowerCase()}/${exam.id}`}
              className="subject-exam-table__row"
            >
              <span className="subject-exam-table__code-cell">
                <span className="subject-exam-table__code">
                  {exam.code}
                  <ChevronIcon />
                </span>
                <span className="subject-exam-table__time">{exam.uploadedAt}</span>
              </span>
              <span className="subject-exam-table__type">{exam.type}</span>
              <span className="subject-exam-table__count">{exam.questionCount}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ChevronIcon() {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
      <path d="m1.5 1.5 5 4.5-5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

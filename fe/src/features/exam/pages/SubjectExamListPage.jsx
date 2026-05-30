import { Link, useParams } from 'react-router-dom'
import SubjectLibraryLayout from '@/shared/components/SubjectLibrary/SubjectLibraryLayout'
import SubjectExamTable from '../components/SubjectExamTable'
import { getSubjectExamSets, isValidExamSubject } from '../examMockData'
import '../exam.css'

export default function SubjectExamListPage() {
  const { subjectCode = '' } = useParams()
  const normalizedCode = subjectCode.toUpperCase()
  const exams = getSubjectExamSets(normalizedCode)
  const isValidSubject = isValidExamSubject(normalizedCode)

  if (!isValidSubject) {
    return (
      <SubjectLibraryLayout activeSubject="exams">
        <section className="subject-exam-list">
          <Link to="/exams" className="subject-exam-list__back">
            <BackIcon />
            Quay lại
          </Link>
          <div className="subject-exam-list__empty">
            <h1>Không tìm thấy môn học</h1>
            <p>Mã môn &quot;{subjectCode}&quot; không tồn tại trong thư viện đề thi.</p>
          </div>
        </section>
      </SubjectLibraryLayout>
    )
  }

  return (
    <SubjectLibraryLayout activeSubject="exams">
      <section className="subject-exam-list">
        <Link to="/exams" className="subject-exam-list__back">
          <BackIcon />
          Quay lại
        </Link>

        <header className="subject-exam-list__header">
          <span className="subject-exam-list__header-icon" aria-hidden="true">
            <DocIcon />
          </span>
          <div>
            <h1>Đề thi cuối kỳ - {normalizedCode}</h1>
            <p>Mã môn: {normalizedCode}</p>
          </div>
        </header>

        <SubjectExamTable exams={exams} subjectCode={normalizedCode} />
      </section>
    </SubjectLibraryLayout>
  )
}

function BackIcon() {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
      <path d="M6.5 1.5 2 6l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 3h8l4 4v14H8V3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 3v4h4M10 12h8M10 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

import { useMemo, useState } from 'react'
import {
  EXAM_MAJOR_OPTIONS,
  EXAM_SEMESTER_OPTIONS,
  EXAM_SEMESTERS,
} from '../examMockData'
import ExamCourseCard from './ExamCourseCard'

export default function ExamLibraryContent() {
  const [semesterFilter, setSemesterFilter] = useState(EXAM_SEMESTER_OPTIONS[0])
  const [majorFilter, setMajorFilter] = useState(EXAM_MAJOR_OPTIONS[0])

  const filteredSemesters = useMemo(() => {
    return EXAM_SEMESTERS.filter((section) => {
      if (semesterFilter !== 'Tất cả học kỳ' && semesterFilter !== `Kỳ ${section.semester}`) {
        return false
      }
      return true
    }).map((section) => ({
      ...section,
      courses: section.courses.filter((course) => {
        if (majorFilter !== 'Tất cả chuyên ngành' && course.major !== majorFilter) {
          return false
        }
        return true
      }),
    })).filter((section) => section.courses.length > 0)
  }, [semesterFilter, majorFilter])

  return (
    <section className="exam-library">
      <header className="exam-library__header">
        <h1>Đề thi cuối kỳ</h1>
        <p>Đề thi cuối kỳ và tài liệu học tập dành cho sinh viên</p>
      </header>

      <div className="exam-library__filters">
        <label className="exam-library__filter">
          <select value={semesterFilter} onChange={(e) => setSemesterFilter(e.target.value)}>
            {EXAM_SEMESTER_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </label>
        <label className="exam-library__filter">
          <select value={majorFilter} onChange={(e) => setMajorFilter(e.target.value)}>
            {EXAM_MAJOR_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </label>
      </div>

      <div className="exam-library__sections">
        {filteredSemesters.map(({ semester, courses }) => (
          <div key={semester} className="exam-library__section">
            <div className="exam-library__section-title">
              <span className="exam-library__section-bar" aria-hidden="true" />
              <h2>Kỳ {semester}</h2>
            </div>
            <div className="exam-library__grid">
              {courses.map((course) => (
                <ExamCourseCard key={`${semester}-${course.code}`} course={course} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ChevronIcon() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

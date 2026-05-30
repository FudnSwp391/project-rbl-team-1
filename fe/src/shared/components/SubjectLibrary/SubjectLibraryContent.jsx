import { useMemo, useState } from 'react'
import SubjectCourseCard from './SubjectCourseCard'
import {
  MAJOR_OPTIONS,
  buildSemesterOptions,
  filterSemesters,
} from './subjectLibraryUtils'

export default function SubjectLibraryContent({ title, description, semesters }) {
  const semesterOptions = useMemo(() => buildSemesterOptions(semesters), [semesters])
  const [semesterFilter, setSemesterFilter] = useState(semesterOptions[0])
  const [majorFilter, setMajorFilter] = useState(MAJOR_OPTIONS[0])

  const filteredSemesters = useMemo(
    () => filterSemesters(semesters, semesterFilter, majorFilter),
    [semesters, semesterFilter, majorFilter],
  )

  return (
    <section className="subject-library">
      <header className="subject-library__header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <div className="subject-library__filters">
        <label className="subject-library__filter">
          <select value={semesterFilter} onChange={(e) => setSemesterFilter(e.target.value)}>
            {semesterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </label>
        <label className="subject-library__filter">
          <select value={majorFilter} onChange={(e) => setMajorFilter(e.target.value)}>
            {MAJOR_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </label>
      </div>

      <div className="subject-library__sections">
        {filteredSemesters.map(({ semester, courses }) => (
          <div key={semester} className="subject-library__section">
            <div className="subject-library__section-title">
              <span className="subject-library__section-bar" aria-hidden="true" />
              <h2>Kỳ {semester}</h2>
            </div>
            <div className="subject-library__grid">
              {courses.map((course) => (
                <SubjectCourseCard key={`${semester}-${course.code}`} course={course} />
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

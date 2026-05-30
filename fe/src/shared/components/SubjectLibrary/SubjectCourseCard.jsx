import { Link } from 'react-router-dom'

export default function SubjectCourseCard({ course, linkPrefix }) {
  const content = (
    <>
      <span className="subject-course-card__code">{course.code}</span>
      <span className="subject-course-card__major">{course.major}</span>
    </>
  )

  if (linkPrefix) {
    return (
      <Link to={`${linkPrefix}/${course.code.toLowerCase()}`} className="subject-course-card">
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className="subject-course-card">
      {content}
    </button>
  )
}

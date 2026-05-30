export default function SubjectCourseCard({ course }) {
  return (
    <button type="button" className="subject-course-card">
      <span className="subject-course-card__code">{course.code}</span>
      <span className="subject-course-card__major">{course.major}</span>
    </button>
  )
}

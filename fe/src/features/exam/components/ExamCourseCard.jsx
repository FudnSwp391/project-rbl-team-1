export default function ExamCourseCard({ course }) {
  return (
    <button type="button" className="exam-course-card">
      <span className="exam-course-card__code">{course.code}</span>
      <span className="exam-course-card__major">{course.major}</span>
    </button>
  )
}

export const MAJOR_OPTIONS = ['Tất cả chuyên ngành', 'AI', 'SE']

export function buildSemesterOptions(semesters) {
  return ['Tất cả học kỳ', ...semesters.map((section) => `Kỳ ${section.semester}`)]
}

export function filterSemesters(semesters, semesterFilter, majorFilter) {
  return semesters
    .filter((section) => {
      if (semesterFilter !== 'Tất cả học kỳ' && semesterFilter !== `Kỳ ${section.semester}`) {
        return false
      }
      return true
    })
    .map((section) => ({
      ...section,
      courses: section.courses.filter((course) => {
        if (majorFilter !== 'Tất cả chuyên ngành' && course.major !== majorFilter) {
          return false
        }
        return true
      }),
    }))
    .filter((section) => section.courses.length > 0)
}

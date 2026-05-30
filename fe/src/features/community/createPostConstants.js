export const SEMESTER_OPTIONS = ['Học kỳ 6', 'Học kỳ 5', 'Học kỳ 4', 'Học kỳ 3']
export const MAJOR_OPTIONS = ['SE', 'SS', 'OSG', 'IS', 'AI']
export const MAX_POST_CONTENT = 5000

export function validateCreatePostForm(values) {
  const errors = {}

  if (!values.title.trim()) {
    errors.title = 'Vui lòng nhập tiêu đề'
  } else if (values.title.trim().length < 5) {
    errors.title = 'Tiêu đề phải có ít nhất 5 ký tự'
  } else if (values.title.trim().length > 200) {
    errors.title = 'Tiêu đề tối đa 200 ký tự'
  }

  if (!values.semester) {
    errors.semester = 'Vui lòng chọn học kỳ'
  }

  if (!values.major) {
    errors.major = 'Vui lòng chọn chuyên ngành'
  }

  if (!values.content.trim()) {
    errors.content = 'Vui lòng nhập nội dung'
  } else if (values.content.trim().length < 20) {
    errors.content = 'Nội dung phải có ít nhất 20 ký tự'
  } else if (values.content.length > MAX_POST_CONTENT) {
    errors.content = `Nội dung tối đa ${MAX_POST_CONTENT} ký tự`
  }

  if (values.tags.length > 10) {
    errors.tags = 'Tối đa 10 thẻ'
  }

  return errors
}

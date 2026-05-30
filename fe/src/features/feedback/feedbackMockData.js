export const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfV3dF5-tYchXLl6cLGSem07EjYY67nWHEmHtpnPBpaBZJtjQ/viewform'

export const FEEDBACK_FORM_COPY = {
  title: 'Gửi phản hồi về SEHub',
  description:
    'Cảm ơn bạn đã dành thời gian chia sẻ ý kiến. Phản hồi của bạn giúp team SEHub cải thiện trải nghiệm sử dụng.',
}

export const FEEDBACK_MAJOR_OPTIONS = ['SE', 'AI', 'Khác']

export const FEEDBACK_TYPE_OPTIONS = [
  'Góp ý cải thiện',
  'Báo cáo lỗi / bug',
  'Đề xuất tính năng mới',
  'Khen ngợi / nhận xét tích cực',
  'Khác',
]

export const SATISFACTION_OPTIONS = [
  { value: '1', label: '1 — Rất không hài lòng' },
  { value: '2', label: '2 — Không hài lòng' },
  { value: '3', label: '3 — Bình thường' },
  { value: '4', label: '4 — Hài lòng' },
  { value: '5', label: '5 — Rất hài lòng' },
]

export function validateFeedbackForm(values) {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = 'Vui lòng nhập email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Email không hợp lệ'
  }

  if (!values.fullName.trim()) {
    errors.fullName = 'Vui lòng nhập họ và tên'
  }

  if (!values.major) {
    errors.major = 'Vui lòng chọn chuyên ngành'
  }

  if (!values.feedbackType) {
    errors.feedbackType = 'Vui lòng chọn loại phản hồi'
  }

  if (!values.satisfaction) {
    errors.satisfaction = 'Vui lòng chọn mức độ hài lòng'
  }

  if (!values.content.trim()) {
    errors.content = 'Vui lòng nhập nội dung phản hồi'
  } else if (values.content.trim().length < 10) {
    errors.content = 'Nội dung phải có ít nhất 10 ký tự'
  }

  return errors
}

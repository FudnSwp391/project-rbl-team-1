/**
 * @param {import('@/entities/user/user.types').RegisterFormValues} values
 * @returns {Record<string, string>}
 */
export function validateRegisterForm(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Vui lòng nhập họ và tên'
  }

  if (!values.email.trim()) {
    errors.email = 'Vui lòng nhập email'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Email không hợp lệ'
  }

  if (!values.password) {
    errors.password = 'Vui lòng nhập mật khẩu'
  } else if (values.password.length < 8) {
    errors.password = 'Mật khẩu phải có ít nhất 8 ký tự'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Vui lòng xác nhận mật khẩu'
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Mật khẩu xác nhận không khớp'
  }

  if (!values.major) {
    errors.major = 'Vui lòng chọn chuyên ngành'
  }

  if (!values.acceptedTerms) {
    errors.acceptedTerms = 'Bạn cần đồng ý với điều khoản sử dụng'
  }

  return errors
}

/**
 * @param {import('@/entities/user/user.types').RegisterFormValues} values
 * @returns {import('@/entities/user/user.types').RegisterPayload}
 */
export function toRegisterPayload(values) {
  const payload = {
    fullName: values.fullName.trim(),
    email: values.email.trim(),
    password: values.password,
    major: values.major,
  }

  if (values.studentId.trim()) {
    payload.studentId = values.studentId.trim()
  }

  return payload
}

/**
 * @param {import('@/entities/user/user.types').OtpFormValues} values
 * @returns {Record<string, string>}
 */
export function validateOtpForm(values) {
  const errors = {}

  if (!values.otp.trim()) {
    errors.otp = 'Vui lòng nhập mã OTP'
  } else if (!/^\d{6}$/.test(values.otp.trim())) {
    errors.otp = 'Mã OTP phải gồm 6 chữ số'
  }

  return errors
}

import { Link } from 'react-router-dom'
import {
  REGISTER_COPY,
  REGISTER_MAJOR_OPTIONS,
} from '@/features/auth/model/register.constants'

export default function RegisterFormWidget({
  form,
  errors,
  loading,
  apiError,
  onFieldChange,
  onSubmit,
}) {
  return (
    <div className="register-form">
      <header className="register-form__header">
        <h1>{REGISTER_COPY.formTitle}</h1>
        <p>{REGISTER_COPY.formSubtitle}</p>
      </header>

      <form className="register-form__body" onSubmit={onSubmit} noValidate>
        <div className="register-field">
          <label className="register-field__label" htmlFor="register-full-name">
            Họ và tên <span className="register-field__required">*</span>
          </label>
          <input
            id="register-full-name"
            type="text"
            className="register-field__input"
            placeholder="Nguyễn Văn A"
            autoComplete="name"
            value={form.fullName}
            onChange={(event) => onFieldChange('fullName', event.target.value)}
          />
          {errors.fullName && <p className="register-field__error">{errors.fullName}</p>}
        </div>

        <div className="register-field">
          <label className="register-field__label" htmlFor="register-email">
            Email <span className="register-field__required">*</span>
          </label>
          <input
            id="register-email"
            type="email"
            className="register-field__input"
            placeholder="name@example.com"
            autoComplete="email"
            value={form.email}
            onChange={(event) => onFieldChange('email', event.target.value)}
          />
          {errors.email && <p className="register-field__error">{errors.email}</p>}
        </div>

        <div className="register-field">
          <label className="register-field__label" htmlFor="register-student-id">
            Mã sinh viên
          </label>
          <input
            id="register-student-id"
            type="text"
            className="register-field__input"
            placeholder="VD: SE123456"
            autoComplete="off"
            value={form.studentId}
            onChange={(event) => onFieldChange('studentId', event.target.value)}
          />
        </div>

        <div className="register-field">
          <p className="register-field__label">
            Chuyên ngành <span className="register-field__required">*</span>
          </p>
          <div className="register-field__choices">
            {REGISTER_MAJOR_OPTIONS.map((option) => (
              <label key={option} className="register-choice">
                <input
                  type="radio"
                  name="major"
                  value={option}
                  checked={form.major === option}
                  onChange={(event) => onFieldChange('major', event.target.value)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {errors.major && <p className="register-field__error">{errors.major}</p>}
        </div>

        <div className="register-field register-field--row">
          <div className="register-field__half">
            <label className="register-field__label" htmlFor="register-password">
              Mật khẩu <span className="register-field__required">*</span>
            </label>
            <input
              id="register-password"
              type="password"
              className="register-field__input"
              placeholder="Tối thiểu 8 ký tự"
              autoComplete="new-password"
              value={form.password}
              onChange={(event) => onFieldChange('password', event.target.value)}
            />
            {errors.password && <p className="register-field__error">{errors.password}</p>}
          </div>

          <div className="register-field__half">
            <label className="register-field__label" htmlFor="register-confirm-password">
              Xác nhận mật khẩu <span className="register-field__required">*</span>
            </label>
            <input
              id="register-confirm-password"
              type="password"
              className="register-field__input"
              placeholder="Nhập lại mật khẩu"
              autoComplete="new-password"
              value={form.confirmPassword}
              onChange={(event) => onFieldChange('confirmPassword', event.target.value)}
            />
            {errors.confirmPassword && (
              <p className="register-field__error">{errors.confirmPassword}</p>
            )}
          </div>
        </div>

        <label className="register-terms">
          <input
            type="checkbox"
            checked={form.acceptedTerms}
            onChange={(event) => onFieldChange('acceptedTerms', event.target.checked)}
          />
          <span>
            Tôi đồng ý với{' '}
            <Link to="/support" target="_blank" rel="noreferrer">
              Điều khoản sử dụng
            </Link>{' '}
            và{' '}
            <Link to="/support" target="_blank" rel="noreferrer">
              Chính sách bảo mật
            </Link>{' '}
            của SEHub
          </span>
        </label>
        {errors.acceptedTerms && <p className="register-field__error">{errors.acceptedTerms}</p>}

        {apiError && <p className="register-form__api-error">{apiError}</p>}

        <button type="submit" className="register-form__submit" disabled={loading}>
          {loading ? 'Đang xử lý...' : 'Đăng ký'}
        </button>

        <p className="register-form__footer">
          Đã có tài khoản?{' '}
          <Link to="/login" className="register-form__link">
            Đăng nhập
          </Link>
        </p>
      </form>
    </div>
  )
}

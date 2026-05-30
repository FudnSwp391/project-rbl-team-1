import { REGISTER_COPY } from '@/features/auth/model/register.constants'

export default function OtpVerifyWidget({
  email,
  otp,
  errors,
  loading,
  apiError,
  onOtpChange,
  onSubmit,
  onBackToLogin,
}) {
  return (
    <div className="register-form">
      <header className="register-form__header">
        <h1>{REGISTER_COPY.otpTitle}</h1>
        <p>
          {REGISTER_COPY.otpSubtitle}{' '}
          {email && <strong className="register-form__email">{email}</strong>}
        </p>
      </header>

      <form className="register-form__body" onSubmit={onSubmit} noValidate>
        <div className="register-field">
          <label className="register-field__label" htmlFor="register-otp">
            Mã OTP <span className="register-field__required">*</span>
          </label>
          <input
            id="register-otp"
            type="text"
            inputMode="numeric"
            maxLength={6}
            className="register-field__input register-field__input--otp"
            placeholder="000000"
            autoComplete="one-time-code"
            value={otp}
            onChange={(event) => onOtpChange(event.target.value.replace(/\D/g, ''))}
          />
          {errors.otp && <p className="register-field__error">{errors.otp}</p>}
        </div>

        {apiError && <p className="register-form__api-error">{apiError}</p>}

        <button type="submit" className="register-form__submit" disabled={loading}>
          {loading ? 'Đang xác thực...' : 'Xác nhận'}
        </button>

        <p className="register-form__footer">
          <button type="button" className="register-form__text-btn" onClick={onBackToLogin}>
            Quay lại đăng nhập
          </button>
        </p>
      </form>
    </div>
  )
}

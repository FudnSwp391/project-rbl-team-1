import { REGISTER_COPY } from '@/features/auth/model/register.constants'

export default function RegisterSuccessWidget({ onGoToLogin }) {
  return (
    <div className="register-form register-form--success">
      <div className="register-form__success-icon" aria-hidden="true">
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
          <circle cx="28" cy="28" r="27" stroke="#16a34a" strokeWidth="2" />
          <path
            d="M17 28.5 24.5 36 39 20"
            stroke="#16a34a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <header className="register-form__header">
        <h1>{REGISTER_COPY.successTitle}</h1>
        <p>{REGISTER_COPY.successSubtitle}</p>
      </header>
      <button type="button" className="register-form__submit" onClick={onGoToLogin}>
        Đăng nhập ngay
      </button>
    </div>
  )
}

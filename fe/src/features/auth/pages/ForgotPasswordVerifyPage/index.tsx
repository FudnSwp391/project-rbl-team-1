import { Navigate } from 'react-router-dom'
import { useForgotPasswordStore } from '@/features/auth/stores'
import { FORGOT_PASSWORD_STRINGS } from '@/features/auth/types'
import '@/features/auth/forgot-password.css'

export default function ForgotPasswordVerifyPage() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)

  if (!selectedMethod) {
    return <Navigate to="/forgot-password" replace />
  }

  const methodLabel =
    selectedMethod === 'email'
      ? FORGOT_PASSWORD_STRINGS.EMAIL_METHOD_TITLE
      : FORGOT_PASSWORD_STRINGS.PHONE_METHOD_TITLE

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-form-panel forgot-password-form-panel--full">
        <div className="forgot-password-form-panel__content">
          <header className="forgot-password-form-panel__header">
            <h1 className="forgot-password-form-panel__title">Xác minh tài khoản</h1>
            <p className="forgot-password-form-panel__subtitle">
              Bước tiếp theo: nhập thông tin {methodLabel.toLowerCase()} để nhận mã xác minh.
            </p>
          </header>
        </div>
      </div>
    </div>
  )
}

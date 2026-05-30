import { Navigate } from 'react-router-dom'
import { useForgotPasswordStore } from '@/features/auth/stores'
import '@/features/auth/forgot-password.css'

export default function ForgotPasswordResetPage() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)

  if (!selectedMethod || !contact) {
    return <Navigate to="/forgot-password" replace />
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-form-panel forgot-password-form-panel--full">
        <div className="forgot-password-form-panel__content">
          <header className="forgot-password-form-panel__header">
            <h1 className="forgot-password-form-panel__title">Đặt lại mật khẩu</h1>
            <p className="forgot-password-form-panel__subtitle">
              Bước tiếp theo: tạo mật khẩu mới cho tài khoản của bạn.
            </p>
          </header>
        </div>
      </div>
    </div>
  )
}

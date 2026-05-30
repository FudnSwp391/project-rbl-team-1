import { Navigate } from 'react-router-dom'
import { useForgotPasswordStore } from '@/features/auth/stores'
import '@/features/auth/forgot-password.css'

export default function ForgotPasswordOtpPage() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)

  if (!selectedMethod || !contact) {
    return <Navigate to="/forgot-password/verify" replace />
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-form-panel forgot-password-form-panel--full">
        <div className="forgot-password-form-panel__content">
          <header className="forgot-password-form-panel__header">
            <h1 className="forgot-password-form-panel__title">Nhập mã xác minh</h1>
            <p className="forgot-password-form-panel__subtitle">
              Mã 6 chữ số đã được gửi đến {contact}.
            </p>
          </header>
        </div>
      </div>
    </div>
  )
}

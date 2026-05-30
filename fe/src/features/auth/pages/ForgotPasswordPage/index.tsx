import {
  ForgotPasswordBrandPanel,
  ForgotPasswordFormPanel,
} from '@/features/auth/components'
import AuthQueryProvider from '@/features/auth/providers/AuthQueryProvider'
import '@/features/auth/forgot-password.css'

function ForgotPasswordPageContent() {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-page__layout">
        <ForgotPasswordBrandPanel />
        <ForgotPasswordFormPanel />
      </div>
    </div>
  )
}

export default function ForgotPasswordPage() {
  return (
    <AuthQueryProvider>
      <ForgotPasswordPageContent />
    </AuthQueryProvider>
  )
}

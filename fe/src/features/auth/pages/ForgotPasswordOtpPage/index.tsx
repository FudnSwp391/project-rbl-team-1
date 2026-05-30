import { Navigate } from 'react-router-dom'
import {
  ForgotPasswordBrandPanel,
  ForgotPasswordOtpFormPanel,
} from '@/features/auth/components'
import AuthQueryProvider from '@/features/auth/providers/AuthQueryProvider'
import { useForgotPasswordStore } from '@/features/auth/stores'
import '@/features/auth/forgot-password.css'

function ForgotPasswordOtpPageContent() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)

  if (!selectedMethod || !contact) {
    return <Navigate to="/forgot-password/verify" replace />
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-page__layout">
        <ForgotPasswordBrandPanel />
        <ForgotPasswordOtpFormPanel />
      </div>
    </div>
  )
}

export default function ForgotPasswordOtpPage() {
  return (
    <AuthQueryProvider>
      <ForgotPasswordOtpPageContent />
    </AuthQueryProvider>
  )
}

import { Navigate } from 'react-router-dom'
import {
  ForgotPasswordBrandPanel,
  ForgotPasswordResetFormPanel,
} from '@/features/auth/components'
import AuthQueryProvider from '@/features/auth/providers/AuthQueryProvider'
import { useForgotPasswordStore } from '@/features/auth/stores'
import '@/features/auth/forgot-password.css'

function ForgotPasswordResetPageContent() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)
  const isOtpVerified = useForgotPasswordStore((state) => state.isOtpVerified)

  if (!selectedMethod || !contact) {
    return <Navigate to="/forgot-password" replace />
  }

  if (!isOtpVerified) {
    return <Navigate to="/forgot-password/otp" replace />
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-page__layout">
        <ForgotPasswordBrandPanel />
        <ForgotPasswordResetFormPanel />
      </div>
    </div>
  )
}

export default function ForgotPasswordResetPage() {
  return (
    <AuthQueryProvider>
      <ForgotPasswordResetPageContent />
    </AuthQueryProvider>
  )
}

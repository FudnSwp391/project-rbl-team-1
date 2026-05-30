import { Navigate } from 'react-router-dom'
import {
  ForgotPasswordBrandPanel,
  ForgotPasswordVerifyFormPanel,
} from '@/features/auth/components'
import AuthQueryProvider from '@/features/auth/providers/AuthQueryProvider'
import { useForgotPasswordStore } from '@/features/auth/stores'
import '@/features/auth/forgot-password.css'

function ForgotPasswordVerifyPageContent() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)

  if (!selectedMethod) {
    return <Navigate to="/forgot-password" replace />
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-page__layout">
        <ForgotPasswordBrandPanel />
        <ForgotPasswordVerifyFormPanel />
      </div>
    </div>
  )
}

export default function ForgotPasswordVerifyPage() {
  return (
    <AuthQueryProvider>
      <ForgotPasswordVerifyPageContent />
    </AuthQueryProvider>
  )
}

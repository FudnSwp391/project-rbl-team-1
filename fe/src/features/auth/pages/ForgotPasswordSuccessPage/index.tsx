import { Navigate } from 'react-router-dom'
import {
  ForgotPasswordBrandPanel,
  ForgotPasswordSuccessPanel,
} from '@/features/auth/components'
import { useForgotPasswordSuccessStore } from '@/features/auth/stores'
import '@/features/auth/forgot-password.css'

export default function ForgotPasswordSuccessPage() {
  const isComplete = useForgotPasswordSuccessStore((state) => state.isComplete)

  if (!isComplete) {
    return <Navigate to="/forgot-password" replace />
  }

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-page__layout">
        <ForgotPasswordBrandPanel />
        <ForgotPasswordSuccessPanel />
      </div>
    </div>
  )
}

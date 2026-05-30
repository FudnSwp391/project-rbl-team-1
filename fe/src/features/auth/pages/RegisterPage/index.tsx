import { RegisterBrandPanel, RegisterFormPanel } from '@/features/auth/components'
import AuthQueryProvider from '@/features/auth/providers/AuthQueryProvider'
import '@/features/auth/login.css'

function RegisterPageContent() {
  return (
    <div className="login-page">
      <div className="login-page__layout">
        <RegisterBrandPanel />
        <RegisterFormPanel />
      </div>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <AuthQueryProvider>
      <RegisterPageContent />
    </AuthQueryProvider>
  )
}

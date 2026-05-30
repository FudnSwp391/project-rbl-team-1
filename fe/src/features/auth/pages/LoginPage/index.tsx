import { LoginBrandPanel, LoginFormPanel } from '@/features/auth/components'
import AuthQueryProvider from '@/features/auth/providers/AuthQueryProvider'
import '@/features/auth/login.css'

function LoginPageContent() {
  return (
    <div className="login-page">
      <div className="login-page__layout">
        <LoginBrandPanel />
        <LoginFormPanel />
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <AuthQueryProvider>
      <LoginPageContent />
    </AuthQueryProvider>
  )
}

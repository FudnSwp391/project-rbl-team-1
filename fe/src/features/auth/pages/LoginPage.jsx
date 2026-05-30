import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '@/features/auth/authSlice'
import { LOGGED_IN_USER } from '@/features/community/loggedInMockData'
import AppHeader from '@/shared/layouts/AppHeader'
import '@/shared/layouts/AppHeader/app-header.css'

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDemoLogin = () => {
    dispatch(
      setCredentials({
        user: {
          fullName: LOGGED_IN_USER.displayName,
          username: LOGGED_IN_USER.username,
          email: LOGGED_IN_USER.email,
        },
        token: 'demo-token',
        role: 'STUDENT',
        plan: 'FREE',
      }),
    )
    navigate('/feed')
  }

  return (
    <div className="login-page">
      <AppHeader activeNav="community" />
      <main className="login-page__main">
        <div className="login-page__card">
          <h1>Đăng nhập</h1>
          <p>Đăng nhập để truy cập cộng đồng, streak và hoạt động cá nhân.</p>
          <button type="button" className="login-page__submit" onClick={handleDemoLogin}>
            Đăng nhập demo
          </button>
        </div>
      </main>
    </div>
  )
}

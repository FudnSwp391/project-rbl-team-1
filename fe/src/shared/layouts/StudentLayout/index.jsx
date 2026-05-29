import { Outlet, Link } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'

export default function StudentLayout() {
  const { user } = useAuth()

  return (
    <div className="layout layout--student">
      <header className="layout__navbar">
        <Link to="/feed">SEHub</Link>
        <nav>
          <Link to="/feed">Cộng đồng</Link>
          <Link to="/exams">Đề thi</Link>
          <Link to="/documents">Tài liệu</Link>
          <Link to="/chat">Chat</Link>
        </nav>
        <span>{user?.fullName || 'Sinh viên'}</span>
      </header>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}

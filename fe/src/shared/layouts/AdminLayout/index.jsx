import { Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="layout layout--admin">
      <header className="layout__navbar">
        <Link to="/admin">Admin</Link>
        <nav>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/users">Người dùng</Link>
          <Link to="/admin/exams">Đề thi</Link>
        </nav>
      </header>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}

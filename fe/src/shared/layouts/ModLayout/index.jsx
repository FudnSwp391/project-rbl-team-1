import { Outlet, Link } from 'react-router-dom'

export default function ModLayout() {
  return (
    <div className="layout layout--mod">
      <header className="layout__navbar">
        <Link to="/mod">Moderator</Link>
        <nav>
          <Link to="/mod/reports">Báo cáo</Link>
          <Link to="/mod/review">Duyệt nội dung</Link>
        </nav>
      </header>
      <main className="layout__content">
        <Outlet />
      </main>
    </div>
  )
}

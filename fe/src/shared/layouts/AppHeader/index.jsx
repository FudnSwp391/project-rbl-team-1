import { Link } from 'react-router-dom'
import logo from '@/assets/logos/sehub-logo.png'

const NAV_ITEMS = [
  { label: 'Trang chủ', to: '/', key: 'home' },
  { label: 'Cộng đồng', to: '/community', key: 'community' },
  { label: 'Hỗ trợ', to: '/support', key: 'support' },
]

export default function AppHeader({ activeNav = 'home' }) {
  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" className="app-header__brand" onClick={handleHomeClick}>
          <img src={logo} alt="SEHub" className="app-header__logo" />
          <span className="app-header__name">SEHub</span>
        </Link>

        <nav className="app-header__nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              to={item.to}
              className={`app-header__link${activeNav === item.key ? ' app-header__link--active' : ''}`}
              onClick={item.key === 'home' ? handleHomeClick : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="app-header__actions">
          <Link to="/login" className="app-header__login">
            Đăng nhập
          </Link>
          <Link to="/register" className="app-header__signup">
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  )
}

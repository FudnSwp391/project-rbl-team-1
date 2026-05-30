import { Link } from 'react-router-dom'
import BrandLogo from '@/shared/components/BrandLogo'
import '@/shared/components/BrandLogo/brand-logo.css'

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
        <BrandLogo to="/" className="app-header__brand" onClick={handleHomeClick} />

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

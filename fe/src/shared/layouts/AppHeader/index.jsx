import { Link } from 'react-router-dom'
import logo from '@/assets/logos/sehub-logo.png'

const NAV_ITEMS = [
  { label: 'Sản phẩm', to: '/#features', key: 'product' },
  { label: 'Cộng đồng', to: '/community', key: 'community' },
  { label: 'Hỗ trợ', to: '/support', key: 'support' },
]

export default function AppHeader({ activeNav = 'product' }) {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" className="app-header__brand">
          <img src={logo} alt="SEHub" className="app-header__logo" />
          <span className="app-header__name">SEHub</span>
        </Link>

        <nav className="app-header__nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) =>
            item.to.startsWith('/#') ? (
              <a
                key={item.key}
                href={item.to}
                className={`app-header__link${activeNav === item.key ? ' app-header__link--active' : ''}`}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.key}
                to={item.to}
                className={`app-header__link${activeNav === item.key ? ' app-header__link--active' : ''}`}
              >
                {item.label}
              </Link>
            ),
          )}
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

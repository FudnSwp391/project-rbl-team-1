import { Link } from 'react-router-dom'
import logo from '@/assets/logos/sehub-logo.png'

const NAV_ITEMS = [
  { label: 'Sản phẩm', href: '#features', active: true },
  { label: 'Cộng đồng', href: '#community' },
  { label: 'Hỗ trợ', href: '#support' },
]

export default function LandingHeader() {
  return (
    <header className="landing-header">
      <div className="landing-header__inner">
        <Link to="/" className="landing-header__brand">
          <img src={logo} alt="SEHub" className="landing-header__logo" />
          <span className="landing-header__name">SEHub</span>
        </Link>

        <nav className="landing-header__nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`landing-header__link${item.active ? ' landing-header__link--active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="landing-header__actions">
          <Link to="/login" className="landing-header__login">
            Đăng nhập
          </Link>
          <Link to="/register" className="landing-header__signup">
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  )
}

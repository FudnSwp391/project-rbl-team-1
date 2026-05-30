import { Link } from 'react-router-dom'
import logo from '@/assets/logos/sehub-logo.png'

const FOOTER_LINKS = {
  product: ['Khóa học', 'AI Trợ giảng', 'Lộ trình học', 'Chứng chỉ'],
  community: [
    { label: 'Diễn đàn', to: '/community' },
    { label: 'Discord', to: '#' },
    { label: 'Sự kiện', to: '/community' },
    { label: 'Blog', to: '#' },
  ],
  support: ['Trung tâm trợ giúp', 'Liên hệ', 'FAQ'],
}

export default function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="landing-footer__inner">
        <div className="landing-footer__grid">
          <div className="landing-footer__brand">
            <Link to="/" className="landing-footer__logo-link">
              <img src={logo} alt="SEHub" className="landing-footer__logo" />
              <span className="landing-footer__name">SEHub</span>
            </Link>
            <p className="landing-footer__tagline">
              Kiến tạo tương lai công nghệ
              <br />
              cho sinh viên SE.
            </p>
            <div className="landing-footer__social">
              <a href="#" className="landing-footer__social-btn" aria-label="Website">
                <GlobeIcon />
              </a>
              <a href="#" className="landing-footer__social-btn" aria-label="Chat">
                <ChatIcon />
              </a>
              <a href="#" className="landing-footer__social-btn" aria-label="Email">
                <MailIcon />
              </a>
            </div>
          </div>

          <FooterColumn title="Sản phẩm" links={FOOTER_LINKS.product} />
          <FooterColumn title="Cộng đồng" links={FOOTER_LINKS.community} />
          <FooterColumn title="Hỗ trợ" links={FOOTER_LINKS.support} />

          <div className="landing-footer__newsletter">
            <h4>Đăng ký nhận tin</h4>
            <p>Nhận thông báo về tài liệu và kỹ năng mới nhất.</p>
            <form className="landing-footer__subscribe" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email của bạn" aria-label="Email của bạn" />
              <button type="submit" aria-label="Đăng ký">
                <ArrowIcon />
              </button>
            </form>
          </div>
        </div>

        <hr className="landing-footer__divider" />

        <div className="landing-footer__bottom">
          <p>© 2026 SEHub. All rights reserved.</p>
          <div className="landing-footer__legal">
            <a href="#">Điều khoản</a>
            <a href="#">Bảo mật</a>
            <span className="landing-footer__lang">
              <GlobeIcon />
              Tiếng Việt
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div className="landing-footer__column">
      <h4>{title}</h4>
      <ul>
        {links.map((item) => {
          const label = typeof item === 'string' ? item : item.label
          const to = typeof item === 'string' ? '#' : item.to

          return (
            <li key={label}>
              {to.startsWith('/') ? (
                <Link to={to}>{label}</Link>
              ) : (
                <a href={to}>{label}</a>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 6h9M6 1.5c1.5 1.5 1.5 7.5 0 9M6 1.5c-1.5 1.5-1.5 7.5 0 9" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 2.5h8a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4l-2 2V3.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <rect x="1.5" y="2.5" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M1.5 3.5 6 7 10.5 3.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6h8M7 3l3 3-3 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

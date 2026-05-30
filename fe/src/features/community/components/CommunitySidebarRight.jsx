import { Link } from 'react-router-dom'
import { TRENDING_POSTS } from '../communityMockData'

export default function CommunitySidebarRight() {
  return (
    <aside className="community-aside">
      <div className="community-cta">
        <div className="community-cta__icon" aria-hidden="true">
          <RocketIcon />
        </div>
        <h3>Tham gia cộng đồng</h3>
        <p>Đăng ký để like, comment, theo dõi bạn bè và tích streak!</p>
        <Link to="/register" className="community-cta__btn">
          Đăng ký ngay
        </Link>
        <Link to="/login" className="community-cta__login">
          Đã có tài khoản? Đăng nhập
        </Link>
      </div>

      <div className="community-trending">
        <h4>Bài viết nổi bật</h4>
        <ul>
          {TRENDING_POSTS.map((title) => (
            <li key={title}>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

function RocketIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 3 16 10l7 2-5 5 1 8-5-3-5 3 1-8-5-5 7-2 2-7Z" fill="#2563eb" />
    </svg>
  )
}

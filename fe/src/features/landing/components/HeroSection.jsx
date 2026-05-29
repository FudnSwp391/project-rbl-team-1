import { Link } from 'react-router-dom'
import mascot from '@/assets/illustrations/ai-mascot.png'

export default function HeroSection() {
  return (
    <section className="landing-hero">
      <div className="landing-hero__gradient" aria-hidden="true" />

      <div className="landing-hero__content">
        <div className="landing-hero__badge">
          <span className="landing-hero__badge-dot" />
          Phiên bản Beta 2.0 đã ra mắt
        </div>

        <h1 className="landing-hero__title">
          Ôn thi, chia sẻ, kết nối
          <br />
          cùng <span className="landing-hero__title-accent">cộng đồng SE</span>
        </h1>

        <p className="landing-hero__subtitle">
          Kho đề thi, tài liệu học tập, cộng đồng bài viết và AI giải đáp — tất cả trong một
          nền tảng được thiết kế chuyên biệt cho sinh viên IT.
        </p>

        <div className="landing-hero__actions">
          <Link to="/register" className="landing-btn landing-btn--primary">
            Đăng ký miễn phí
            <ArrowIcon />
          </Link>
          <Link to="/exams" className="landing-btn landing-btn--outline">
            <DocIcon />
            Xem đề thi
          </Link>
        </div>
      </div>

      <div className="landing-hero__visual">
        <div className="landing-hero__visual-glow" aria-hidden="true" />

        <div className="landing-hero__float landing-hero__float--points">
          <StarIcon />
          +50 Điểm
        </div>

        <div className="landing-hero__float landing-hero__float--exam">
          <DocIcon />
          Đề thi Đáo hạn
        </div>

        <div className="landing-hero__chat">
          <div className="landing-hero__chat-header">
            <div className="landing-hero__chat-user">
              <img src={mascot} alt="" className="landing-hero__chat-avatar" />
              <div>
                <strong>AI Trợ Giảng</strong>
                <span>Đang trực tuyến</span>
              </div>
            </div>
            <span className="landing-hero__chat-status" aria-label="Online" />
          </div>

          <div className="landing-hero__chat-body">
            <div className="landing-hero__bubble landing-hero__bubble--user">
              Giải thích thuật toán Dijkstra một cách đơn giản?
            </div>
            <div className="landing-hero__bubble landing-hero__bubble--ai">
              Dijkstra tìm đường đi ngắn nhất từ một đỉnh đến các đỉnh còn lại bằng cách luôn
              chọn đỉnh gần nhất chưa duyệt...
            </div>
          </div>

          <div className="landing-hero__chat-input">
            <span>Hỏi AI bất kỳ điều gì...</span>
            <button type="button" className="landing-hero__chat-send" aria-label="Gửi">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DocIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M8.5 1.5H3.5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.5L8.5 1.5Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8.5 1.5V5.5H12.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M9 1.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7L9 12.1l-4.2 2.2.8-4.7L2.2 6.5l4.7-.7L9 1.5Z" fill="#2563eb" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" aria-hidden="true">
      <path d="M1 5h9M6 1.5 10 5 6 8.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

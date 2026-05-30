import { Link } from 'react-router-dom'
import AiAvatar from './AiAvatar'

export default function HeroSection() {
  return (
    <section className="landing-hero" id="home">
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
        <div className="landing-hero__orb landing-hero__orb--1" aria-hidden="true" />
        <div className="landing-hero__orb landing-hero__orb--2" aria-hidden="true" />
        <div className="landing-hero__visual-glow" aria-hidden="true" />

        <div className="landing-hero__float landing-hero__float--points">
          <span className="landing-hero__float-icon landing-hero__float-icon--gold">
            <StarIcon />
          </span>
          <div>
            <strong>+50 Điểm</strong>
            <span>Hoàn thành bài tập</span>
          </div>
        </div>

        <div className="landing-hero__float landing-hero__float--exam">
          <span className="landing-hero__float-icon landing-hero__float-icon--blue">
            <DocIcon />
          </span>
          <div>
            <strong>Đề thi Đáo hạn</strong>
            <span>Cơ sở dữ liệu · 2 ngày</span>
          </div>
        </div>

        <div className="landing-hero__chat">
          <div className="landing-hero__chat-header">
            <div className="landing-hero__chat-user">
              <AiAvatar size={44} />
              <div>
                <strong>AI Trợ Giảng</strong>
                <span className="landing-hero__online">
                  <span className="landing-hero__online-dot" />
                  Đang trực tuyến
                </span>
              </div>
            </div>
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
            <span>
              Hỏi AI bất kỳ điều gì...
            </span>
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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M9 1.5H4a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6L9 1.5Z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 1.5V6h4.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6 9h4M6 11.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M8 1.5 9.8 5.8l4.7.7-3.4 3.3.8 4.7L8 11.8l-4.9 2.7.8-4.7-3.4-3.3 4.7-.7L8 1.5Z" fill="currentColor" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1.5 6h9M6.5 2.5 10.5 6 6.5 9.5" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

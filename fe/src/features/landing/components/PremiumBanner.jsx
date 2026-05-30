import { Link } from 'react-router-dom'

export default function PremiumBanner() {
  return (
    <section className="landing-pricing" id="pricing">
      <div className="landing-section-header">
        <h2>Đầu tư cho tương lai</h2>
        <p>Chọn gói phù hợp với nhu cầu học tập của bạn.</p>
      </div>

      <div className="landing-premium">
        <div className="landing-premium__glow" aria-hidden="true" />
        <div className="landing-premium__info">
          <div className="landing-premium__icon" aria-hidden="true">
            <StarIcon />
          </div>
          <div>
            <h3>Nâng cấp Premium</h3>
            <p>Xem full đáp án, tài liệu, AI không giới hạn</p>
          </div>
          <div className="landing-premium__badges">
            <span className="landing-premium__badge landing-premium__badge--purple">Từ 49K/tháng</span>
            <span className="landing-premium__badge landing-premium__badge--blue">
              Tiết kiệm 20% gói 8 tháng
            </span>
          </div>
        </div>

        <Link to="/pricing" className="landing-premium__cta">
          Xem gói ngay
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M7.5 3 11 6.5 7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

function StarIcon() {
  return (
    <svg width="19" height="25" viewBox="0 0 19 25" fill="none" aria-hidden="true">
      <path d="M9.5 1.5 11.5 8h6.5l-5.2 4 2 6.5-6.8-4.5-6.8 4.5 2-6.5-5.2-4h6.5L9.5 1.5Z" fill="#fff" />
    </svg>
  )
}

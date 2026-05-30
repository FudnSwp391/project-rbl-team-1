import heroIllustration from '@/assets/illustrations/support-hero.png'

export default function SupportHero() {
  return (
    <section className="support-hero">
      <div className="support-hero__gradient" aria-hidden="true" />
      <div className="support-hero__blur" aria-hidden="true" />
      <div className="support-hero__content">
        <h1>
          Trung tâm hỗ trợ
          <span>SEHub</span>
        </h1>
        <p>
          Tìm câu trả lời, gửi yêu cầu hỗ trợ và nhận trợ giúp nhanh chóng từ đội ngũ chuyên gia của
          chúng tôi.
        </p>
        <div className="support-hero__search">
          <SearchIcon />
          <input type="search" placeholder="Tìm kiếm câu hỏi hoặc vấn đề…" aria-label="Tìm kiếm hỗ trợ" />
        </div>
      </div>
      <div className="support-hero__visual">
        <img src={heroIllustration} alt="" className="support-hero__image" />
      </div>
    </section>
  )
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="5.5" stroke="#64748b" strokeWidth="1.5" />
      <path d="M12.5 12.5 16 16" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

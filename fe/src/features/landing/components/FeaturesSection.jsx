import Reveal from './Reveal'

const FEATURES = [
  {
    icon: 'exam',
    iconBg: 'blue',
    title: 'Kho đề thi',
    description:
      'Truy cập hàng ngàn đề thi cuối kỳ, giữa kỳ được phân loại rõ ràng theo từng môn học và giảng viên.',
  },
  {
    icon: 'community',
    iconBg: 'blue',
    title: 'Cộng đồng',
    description:
      'Kết nối, thảo luận và học hỏi từ hàng ngàn sinh viên IT khác. Đặt câu hỏi và nhận giải đáp nhanh chóng.',
  },
  {
    icon: 'ai',
    iconBg: 'gradient',
    title: 'AI giải đáp',
    description:
      'Trợ giảng AI thông minh hỗ trợ giải bài tập, giải thích code và tóm tắt tài liệu một cách chuẩn xác.',
  },
  {
    icon: 'trophy',
    iconBg: 'gold',
    title: 'Gamification',
    description:
      'Học tập không nhàm chán với hệ thống điểm thưởng, cấp độ và huy hiệu để ghi nhận sự nỗ lực.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="landing-features">
      <Reveal className="landing-section-header">
        <h2>Hệ sinh thái học tập toàn diện</h2>
        <p>Công cụ mạnh mẽ giúp bạn tối ưu hóa thời gian và nâng cao hiệu suất học tập.</p>
      </Reveal>

      <div className="landing-features__grid">
        {FEATURES.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 90} as="article" className="landing-feature-card">
            <div className={`landing-feature-card__icon landing-feature-card__icon--${feature.iconBg}`}>
              <FeatureIcon type={feature.icon} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function FeatureIcon({ type }) {
  if (type === 'exam') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 3h8l4 4v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="#2563eb" strokeWidth="1.5" />
        <path d="M12 3v4h4M7 11h6M7 14h4" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  if (type === 'community') {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 14c0-2.2 2.7-4 6-4s6 1.8 6 4M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#2563eb" strokeWidth="1.5" />
      </svg>
    )
  }
  if (type === 'ai') {
    return (
      <svg width="22" height="19" viewBox="0 0 22 19" fill="none" aria-hidden="true">
        <rect x="1" y="4" width="20" height="14" rx="3" stroke="#004ac6" strokeWidth="1.5" />
        <circle cx="7" cy="11" r="1.5" fill="#9333ea" />
        <circle cx="11" cy="11" r="1.5" fill="#9333ea" />
        <circle cx="15" cy="11" r="1.5" fill="#9333ea" />
        <path d="M7 1.5h8" stroke="#004ac6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="10" height="20" viewBox="0 0 10 20" fill="none" aria-hidden="true">
      <path d="M5 1v3M5 16v3M1 5h3M6 5h3" stroke="#ca8a04" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" stroke="#ca8a04" strokeWidth="1.5" />
    </svg>
  )
}

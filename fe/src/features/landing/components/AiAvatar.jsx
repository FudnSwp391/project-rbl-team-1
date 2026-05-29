export default function AiAvatar({ size = 40 }) {
  return (
    <div className="landing-ai-avatar" style={{ width: size, height: size }}>
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="20" fill="url(#ai-avatar-bg)" />
        <rect x="11" y="14" width="18" height="14" rx="4" fill="#fff" fillOpacity="0.95" />
        <circle cx="16" cy="21" r="2" fill="#004ac6" />
        <circle cx="24" cy="21" r="2" fill="#004ac6" />
        <path d="M17 25h6" stroke="#004ac6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 10v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="9" r="1.5" fill="#fff" />
        <defs>
          <linearGradient id="ai-avatar-bg" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

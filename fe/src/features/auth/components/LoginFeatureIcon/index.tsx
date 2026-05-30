import type { LoginFeature } from '@/features/auth/types'

interface LoginFeatureIconProps {
  icon: LoginFeature['icon']
}

export default function LoginFeatureIcon({ icon }: LoginFeatureIconProps) {
  if (icon === 'exam') return <ExamIcon />
  if (icon === 'ai') return <AiIcon />
  return <StreakIcon />
}

function ExamIcon() {
  return (
    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" aria-hidden="true">
      <path d="M4 1.5h9.5L16 4v19.5H4V1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13.5 1.5V4.5H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6.5 9h7M6.5 13h7M6.5 17h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function AiIcon() {
  return (
    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
      <rect x="3" y="6" width="22" height="14" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="13" r="1.5" fill="currentColor" />
      <circle cx="18" cy="13" r="1.5" fill="currentColor" />
      <path d="M9 4h10M14 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function StreakIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden="true">
      <path
        d="M10 2c1.5 2.8 4.5 4.2 4.5 7.5a4.5 4.5 0 1 1-9 0C5.5 6.2 8.5 4.8 10 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7 18h6M8.5 21h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

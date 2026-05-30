export function EmailIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M1.5 4.5 9 9.5l7.5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function LockIcon() {
  return (
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" aria-hidden="true">
      <rect x="2" y="8" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="8" cy="13.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function EyeIcon({ hidden = false }: { hidden?: boolean }) {
  if (hidden) {
    return (
      <svg width="20" height="17" viewBox="0 0 20 17" fill="none" aria-hidden="true">
        <path
          d="M1 1.5 19 15.5M7.5 7.8A3 3 0 0 0 10 12a3 3 0 0 0 2.5-4.2M4.2 4.8C2.4 6.2 1 8.2 1 8.2S4.2 14.2 10 14.2c1.6 0 3-.4 4.2-1M13.8 5.8C15.6 7.2 17 9.2 17 9.2S13.8 3.2 8 3.2c-1.1 0-2.1.2-3 .6"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" aria-hidden="true">
      <path
        d="M1 8.2S4.2 2.2 10 2.2 19 8.2 19 8.2 15.8 14.2 10 14.2 1 8.2 1 8.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.2" r="2.8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M18.8 10.2c0-.7-.1-1.2-.2-1.8H10v3.3h4.9c-.2 1.1-.9 2.1-1.9 2.7v2.2h3.1c1.8-1.7 2.7-4.1 2.7-7.4Z"
        fill="#4285F4"
      />
      <path
        d="M10 19c2.6 0 4.8-.9 6.4-2.4l-3.1-2.2c-.9.6-2 1-3.3 1-2.5 0-4.7-1.7-5.4-4H1.3v2.3C2.9 16.9 6.2 19 10 19Z"
        fill="#34A853"
      />
      <path
        d="M4.6 11.4A5.3 5.3 0 0 1 4.2 10c0-.5.1-1 .3-1.4V6.3H1.3A8.8 8.8 0 0 0 1 10c0 1.3.3 2.5.8 3.7l3.8-3Z"
        fill="#FBBC05"
      />
      <path
        d="M10 4.8c1.4 0 2.6.5 3.6 1.4l2.7-2.7C14.8 1.9 12.6 1 10 1 6.2 1 2.9 3.1 1.3 6.3l3.8 3c.7-2.3 2.9-4 5.4-4Z"
        fill="#EA4335"
      />
    </svg>
  )
}

import { PAYMENT_STRINGS } from '@/features/payment/types'

export default function FloatingChatButton() {
  return (
    <button type="button" className="payment-fab" aria-label={PAYMENT_STRINGS.FLOATING_CHAT.LABEL}>
      <ChatIcon />
    </button>
  )
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M3 4h14v9H7l-3 3V4Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

import { PAYMENT_STRINGS } from '@/features/payment/types'

export default function QrCodePanel() {
  return (
    <div className="payment-qr-panel">
      <div className="payment-qr-panel__code">
        <QrPlaceholder />
      </div>
      <p className="payment-qr-panel__hint">
        {PAYMENT_STRINGS.CHECKOUT.QR_HINT_LINE_1}
        <br />
        <strong>{PAYMENT_STRINGS.CHECKOUT.QR_HINT_BANK}</strong>
        {PAYMENT_STRINGS.CHECKOUT.QR_HINT_OR}
        <strong>{PAYMENT_STRINGS.CHECKOUT.QR_HINT_WALLET}</strong>
      </p>
    </div>
  )
}

function QrPlaceholder() {
  return (
    <svg viewBox="0 0 165 176" className="payment-qr-panel__svg" aria-hidden="true">
      <rect width="165" height="176" fill="#fff" />
      <rect x="12" y="12" width="44" height="44" fill="#0f172a" />
      <rect x="18" y="18" width="32" height="32" fill="#fff" />
      <rect x="24" y="24" width="20" height="20" fill="#0f172a" />
      <rect x="109" y="12" width="44" height="44" fill="#0f172a" />
      <rect x="115" y="18" width="32" height="32" fill="#fff" />
      <rect x="121" y="24" width="20" height="20" fill="#0f172a" />
      <rect x="12" y="120" width="44" height="44" fill="#0f172a" />
      <rect x="18" y="126" width="32" height="32" fill="#fff" />
      <rect x="24" y="132" width="20" height="20" fill="#0f172a" />
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((__, col) => {
          if ((row + col) % 2 === 0) {
            return (
              <rect
                key={`${row}-${col}`}
                x={62 + col * 8}
                y={62 + row * 8}
                width="6"
                height="6"
                fill="#0f172a"
              />
            )
          }
          return null
        }),
      )}
    </svg>
  )
}

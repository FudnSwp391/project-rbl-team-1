import CopyableField from '@/features/payment/components/CopyableField'
import { PAYMENT_STRINGS, type PaymentCheckoutBankTransfer } from '@/features/payment/types'

interface BankTransferPanelProps {
  bankTransfer: PaymentCheckoutBankTransfer
  onCopy: (value: string) => void
}

export default function BankTransferPanel({ bankTransfer, onCopy }: BankTransferPanelProps) {
  return (
    <div className="payment-bank-panel">
      <div className="payment-bank-panel__bank">
        <span className="payment-bank-panel__logo" aria-hidden="true">
          MB
        </span>
        <div>
          <span className="payment-bank-panel__bank-label">{PAYMENT_STRINGS.CHECKOUT.BANK_LABEL}</span>
          <strong>{bankTransfer.bankName}</strong>
        </div>
      </div>

      <CopyableField
        label={PAYMENT_STRINGS.CHECKOUT.ACCOUNT_NUMBER_LABEL}
        value={bankTransfer.accountNumber}
        tone="primary"
        onCopy={onCopy}
      />
      <CopyableField
        label={PAYMENT_STRINGS.CHECKOUT.ACCOUNT_NAME_LABEL}
        value={bankTransfer.accountName}
        onCopy={onCopy}
      />
      <CopyableField
        label={PAYMENT_STRINGS.CHECKOUT.TRANSFER_CONTENT_LABEL}
        value={bankTransfer.transferContent}
        tone="highlight"
        onCopy={onCopy}
      />
    </div>
  )
}

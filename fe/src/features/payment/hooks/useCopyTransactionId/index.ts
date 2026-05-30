import useClipboard from '@/shared/hooks/useClipboard'
import { usePaymentStore } from '@/features/payment/stores/paymentStore'

export default function useCopyTransactionId() {
  const setCopiedTransactionId = usePaymentStore((state) => state.setCopiedTransactionId)
  const { copy, isCopied } = useClipboard()

  const copyTransactionId = async (transactionId: string) => {
    const success = await copy(transactionId)
    setCopiedTransactionId(success ? transactionId : null)
    return success
  }

  return {
    copyTransactionId,
    isCopied,
  }
}

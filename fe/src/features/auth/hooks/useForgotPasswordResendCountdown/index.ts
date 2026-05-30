import { useEffect, useState } from 'react'
import { formatCountdown } from '@/features/auth/utils/formatCountdown'
import { useForgotPasswordStore } from '@/features/auth/stores'

export default function useForgotPasswordResendCountdown() {
  const resendAvailableAt = useForgotPasswordStore((state) => state.resendAvailableAt)
  const [remainingSeconds, setRemainingSeconds] = useState(0)

  useEffect(() => {
    if (!resendAvailableAt) {
      setRemainingSeconds(0)
      return
    }

    const updateRemaining = () => {
      const nextRemaining = Math.ceil((resendAvailableAt - Date.now()) / 1000)
      setRemainingSeconds(Math.max(0, nextRemaining))
    }

    updateRemaining()
    const intervalId = window.setInterval(updateRemaining, 1000)
    return () => window.clearInterval(intervalId)
  }, [resendAvailableAt])

  return {
    canResend: remainingSeconds === 0,
    remainingSeconds,
    formattedCountdown: formatCountdown(remainingSeconds),
  }
}

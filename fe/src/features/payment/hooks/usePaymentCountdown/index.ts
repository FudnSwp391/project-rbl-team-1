import { useEffect, useState } from 'react'
import { formatCountdown } from '@/features/payment/services'

export default function usePaymentCountdown(initialSeconds: number) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialSeconds)

  useEffect(() => {
    setRemainingSeconds(initialSeconds)
  }, [initialSeconds])

  useEffect(() => {
    if (remainingSeconds <= 0) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setRemainingSeconds((current) => Math.max(current - 1, 0))
    }, 1000)

    return () => window.clearInterval(timerId)
  }, [remainingSeconds])

  return {
    remainingSeconds,
    formattedTime: formatCountdown(remainingSeconds),
    isExpired: remainingSeconds <= 0,
  }
}

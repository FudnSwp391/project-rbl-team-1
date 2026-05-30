import { useCallback, useState } from 'react'

interface UseClipboardOptions {
  resetDelayMs?: number
}

export default function useClipboard({ resetDelayMs = 2000 }: UseClipboardOptions = {}) {
  const [isCopied, setIsCopied] = useState(false)

  const copy = useCallback(
    async (value: string) => {
      if (!value) {
        return false
      }

      try {
        await navigator.clipboard.writeText(value)
        setIsCopied(true)
        window.setTimeout(() => setIsCopied(false), resetDelayMs)
        return true
      } catch {
        setIsCopied(false)
        return false
      }
    },
    [resetDelayMs],
  )

  return { copy, isCopied }
}

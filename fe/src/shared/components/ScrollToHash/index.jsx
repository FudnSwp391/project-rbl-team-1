import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToHash } from '@/shared/utils/scrollToHash'

export default function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        scrollToHash(hash)
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
    return undefined
  }, [pathname, hash])

  return null
}

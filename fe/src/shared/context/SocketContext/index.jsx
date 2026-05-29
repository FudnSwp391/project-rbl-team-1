import { createContext, useMemo } from 'react'
import useAuth from '@/shared/hooks/useAuth'

export const SocketContext = createContext(null)

export function SocketProvider({ children }) {
  const { token, isLoggedIn } = useAuth()

  const socket = useMemo(() => {
    if (!isLoggedIn || !token) return null
    return { on: () => {}, off: () => {}, emit: () => {} }
  }, [isLoggedIn, token])

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
}

import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useAuth from '@/shared/hooks/useAuth'
import { closeFloatingChat } from '@/features/social/chatSlice'
import FloatingChatHost from './FloatingChatHost'
import FloatingChatLauncher from './FloatingChatLauncher'

export default function FloatingChatRoot() {
  const { isLoggedIn } = useAuth()
  const location = useLocation()
  const dispatch = useDispatch()
  const hideLauncher = location.pathname === '/messages'

  useEffect(() => {
    if (hideLauncher) {
      dispatch(closeFloatingChat())
    }
  }, [hideLauncher, dispatch])

  if (!isLoggedIn) return null

  return (
    <>
      {!hideLauncher ? <FloatingChatLauncher /> : null}
      <FloatingChatHost />
    </>
  )
}

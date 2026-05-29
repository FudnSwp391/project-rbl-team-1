import { Navigate } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import { isMod } from '@/shared/utils/roleHelper'

export default function ModRoute({ children }) {
  const { isLoggedIn, role } = useAuth()
  if (!isLoggedIn) return <Navigate to="/login" replace />
  if (!isMod(role)) return <Navigate to="/feed" replace />
  return children
}

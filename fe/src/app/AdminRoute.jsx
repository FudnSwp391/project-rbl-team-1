import { Navigate } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import { isAdmin } from '@/shared/utils/roleHelper'

export default function AdminRoute({ children }) {
  const { isLoggedIn, role } = useAuth()
  if (!isLoggedIn) return <Navigate to="/login" replace />
  if (!isAdmin(role)) return <Navigate to="/feed" replace />
  return children
}

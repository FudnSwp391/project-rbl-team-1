import { Navigate } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import { isPremium } from '@/shared/utils/roleHelper'

export default function PremiumRoute({ children }) {
  const { isLoggedIn, plan } = useAuth()
  if (!isLoggedIn) return <Navigate to="/login" replace />
  if (!isPremium(plan)) return <Navigate to="/pricing" replace />
  return children
}

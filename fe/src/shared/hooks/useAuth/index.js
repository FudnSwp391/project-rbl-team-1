import { useSelector } from 'react-redux'

export default function useAuth() {
  const { user, token, role, plan, isLoggedIn } = useSelector((state) => state.auth)
  return { user, token, role, plan, isLoggedIn }
}

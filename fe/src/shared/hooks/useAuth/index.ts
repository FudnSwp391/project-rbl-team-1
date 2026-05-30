import { useAuthStore } from '@/shared/stores/authStore'

export default function useAuth() {
  const user = useAuthStore((state) => state.user)
  const token = useAuthStore((state) => state.token)
  const role = useAuthStore((state) => state.role)
  const plan = useAuthStore((state) => state.plan)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  return { user, token, role, plan, isLoggedIn }
}

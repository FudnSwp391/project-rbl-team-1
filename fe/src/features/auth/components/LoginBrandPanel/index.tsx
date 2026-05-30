import AuthBrandPanel from '@/features/auth/components/AuthBrandPanel'
import { LOGIN_STRINGS } from '@/features/auth/types'

export default function LoginBrandPanel() {
  return <AuthBrandPanel titleLines={LOGIN_STRINGS.WELCOME_TITLE} />
}

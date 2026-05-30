import AuthBrandPanel from '@/features/auth/components/AuthBrandPanel'
import { REGISTER_STRINGS } from '@/features/auth/types'

export default function RegisterBrandPanel() {
  return <AuthBrandPanel titleLines={REGISTER_STRINGS.WELCOME_TITLE} />
}

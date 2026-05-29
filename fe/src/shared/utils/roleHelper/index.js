import { PLAN_TYPES, ROLES } from '@/shared/utils/constants'

export function isAdmin(role) {
  return role === ROLES.ADMIN
}

export function isMod(role) {
  return role === ROLES.MOD
}

export function isPremium(plan) {
  return plan === PLAN_TYPES.PREMIUM
}

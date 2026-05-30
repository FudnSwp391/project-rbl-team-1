export const formatCountdown = (totalSeconds: number): string => {
  const safeSeconds = Math.max(0, totalSeconds)
  const minutes = Math.floor(safeSeconds / 60)
  const seconds = safeSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export const maskContact = (contact: string, method: 'email' | 'phone'): string => {
  if (method === 'phone') {
    if (contact.length <= 4) return contact
    return `${contact.slice(0, 3)}****${contact.slice(-2)}`
  }

  const [localPart, domain = ''] = contact.split('@')
  if (!localPart || !domain) return contact
  const maskedLocal =
    localPart.length <= 2
      ? `${localPart[0] ?? ''}*`
      : `${localPart.slice(0, 2)}${'*'.repeat(Math.min(localPart.length - 2, 4))}`
  return `${maskedLocal}@${domain}`
}

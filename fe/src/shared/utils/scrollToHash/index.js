const HEADER_OFFSET = 88
const HASH_ALIASES = {
  features: 'home',
}

export function scrollToHash(hash) {
  const rawId = hash.replace(/^#/, '')
  const id = HASH_ALIASES[rawId] ?? rawId
  if (!id) return false

  const element = document.getElementById(id)
  if (!element) return false

  const top = element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  return true
}

export function parseRouteHash(href) {
  const [pathname = '/', hash = ''] = href.split('#')
  return {
    pathname: pathname || '/',
    hash: hash ? `#${hash}` : '',
  }
}

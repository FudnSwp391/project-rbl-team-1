import { Link, useLocation } from 'react-router-dom'
import { parseRouteHash, scrollToHash } from '@/shared/utils/scrollToHash'

export default function HashLink({ to, className, children, onClick, ...props }) {
  const location = useLocation()
  const { pathname, hash } = parseRouteHash(to)

  const handleClick = (event) => {
    onClick?.(event)
    if (event.defaultPrevented) return

    if (hash && location.pathname === pathname) {
      event.preventDefault()
      window.history.replaceState(null, '', `${pathname}${hash}`)
      scrollToHash(hash)
    }
  }

  if (!hash) {
    return (
      <Link to={pathname} className={className} onClick={onClick} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <Link
      to={{ pathname, hash }}
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  )
}

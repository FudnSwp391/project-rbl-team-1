import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '@/features/auth/authSlice'

function getAvatarLetter(name) {
  const cleaned = name.replace('@', '').trim()
  return (cleaned[0] || 'U').toUpperCase()
}

export default function ProfileMenu({ user }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return

    const handlePointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const handleLogout = () => {
    setOpen(false)
    dispatch(logout())
    window.location.replace('/')
  }

  return (
    <div ref={rootRef} className="app-header-logged-in__profile">
      <button
        type="button"
        className={`app-header-logged-in__profile-trigger${open ? ' app-header-logged-in__profile-trigger--open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Menu tài khoản"
      >
        <span className="app-header-logged-in__avatar">{getAvatarLetter(user.username)}</span>
        <span className="app-header-logged-in__display-name">{user.displayName}</span>
        <ChevronIcon open={open} className="app-header-logged-in__chevron" />
      </button>

      {open && (
        <div className="app-header-logged-in__dropdown" role="menu">
          <div className="app-header-logged-in__dropdown-head">
            <strong>{user.username}</strong>
            <span>{user.email}</span>
          </div>
          <hr />
          <nav>
            <Link to={user.profileHref} role="menuitem" onClick={() => setOpen(false)}>
              Thông tin cá nhân
            </Link>
            <Link to="/pricing" role="menuitem" onClick={() => setOpen(false)}>
              Nâng cấp
            </Link>
          </nav>
          <hr />
          <button type="button" role="menuitem" onClick={handleLogout}>
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  )
}

function ChevronIcon({ open, className = '' }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      aria-hidden="true"
      className={`${className}${open ? ' app-header-logged-in__chevron--open' : ''}`}
    >
      <path d="M1 1.5 5 4.5 9 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '@/features/auth/authSlice'

function getInitials(name) {
  const parts = name.replace('@', '').split(/[\s._-]+/).filter(Boolean)
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

export default function ProfileMenu({ user }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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
    navigate('/login')
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
        <span className="app-header-logged-in__avatar">{getInitials(user.username)}</span>
        <span className="app-header-logged-in__display-name">{user.displayName}</span>
        <ChevronIcon open={open} />
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

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={open ? 'app-header-logged-in__chevron--open' : ''}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

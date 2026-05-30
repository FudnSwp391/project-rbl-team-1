import { useEffect, useRef, useState } from 'react'
import { NOTIFICATIONS } from '@/features/community/loggedInMockData'

export default function NotificationBell({ notifications = NOTIFICATIONS }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const unreadCount = notifications.filter((item) => !item.read).length

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

  return (
    <div ref={rootRef} className="app-header-logged-in__notifications">
      <button
        type="button"
        className={`app-header-logged-in__icon-btn${open ? ' app-header-logged-in__icon-btn--open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Thông báo"
      >
        <BellIcon />
        {unreadCount > 0 && (
          <span className="app-header-logged-in__badge">{unreadCount}</span>
        )}
      </button>

      {open && (
        <div className="notification-dropdown" role="dialog" aria-label="Thông báo">
          <div className="notification-dropdown__head">
            <h2>Thông báo</h2>
          </div>

          {notifications.length === 0 ? (
            <p className="notification-dropdown__empty">Chưa có thông báo nào</p>
          ) : (
            <ul className="notification-dropdown__list">
              {notifications.map((item) => (
                <li
                  key={item.id}
                  className={`notification-dropdown__item${item.read ? '' : ' notification-dropdown__item--unread'}`}
                >
                  <p className="notification-dropdown__title">{item.title}</p>
                  {item.message && <p className="notification-dropdown__message">{item.message}</p>}
                  {item.time && <span className="notification-dropdown__time">{item.time}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3a5 5 0 0 1 5 5v3.2l1.8 3H5.2l1.8-3V8a5 5 0 0 1 5-5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M9.5 17.5a2.5 2.5 0 0 0 5 0" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

import { useEffect, useRef, useState } from 'react'

export default function PostOptionsMenu({ onReport }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleReport = (event) => {
    event.stopPropagation()
    setOpen(false)
    onReport?.()
  }

  return (
    <div className="community-post__menu-wrap" ref={menuRef}>
      <button
        type="button"
        className="community-post__menu"
        aria-label="Tùy chọn bài viết"
        aria-expanded={open}
        onClick={(event) => {
          event.stopPropagation()
          setOpen((prev) => !prev)
        }}
      >
        •••
      </button>

      {open && (
        <div className="community-post__menu-dropdown" role="menu">
          <button type="button" role="menuitem" onClick={handleReport}>
            Báo cáo bài viết
          </button>
        </div>
      )}
    </div>
  )
}

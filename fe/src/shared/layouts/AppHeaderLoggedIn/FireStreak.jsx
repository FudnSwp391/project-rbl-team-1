import { useEffect, useRef, useState } from 'react'
import fireIcon from '@/assets/icons/fire-streak.png'
import {
  DAILY_TASKS,
  getDailyTaskProgress,
  STREAK_DATA,
} from '@/features/community/loggedInMockData'

export default function FireStreak({ count = STREAK_DATA.count, tasks = DAILY_TASKS }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const { completed, total } = getDailyTaskProgress(tasks)

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
    <div ref={rootRef} className="app-header-logged-in__streak">
      <button
        type="button"
        className={`app-header-logged-in__streak-btn${open ? ' app-header-logged-in__streak-btn--open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Nhiệm vụ hàng ngày"
      >
        <span className="streak-container">
          <img src={fireIcon} alt="" className="fire-icon" aria-hidden="true" />
          {count > 0 && <span className="streak-badge">{count}</span>}
        </span>
      </button>

      {open && (
        <div className="streak-dropdown" role="dialog" aria-label="Nhiệm vụ hàng ngày">
          <div className="streak-dropdown__head">
            <h2>Nhiệm vụ hàng ngày</h2>
            <span className="streak-dropdown__summary">
              {completed}/{total}
            </span>
          </div>

          <ul className="streak-dropdown__list">
            {tasks.map((task) => {
              const done = task.current >= task.target

              return (
                <li key={task.id} className={`streak-dropdown__item${done ? ' streak-dropdown__item--done' : ''}`}>
                  <span className="streak-dropdown__check" aria-hidden="true">
                    {done ? <CheckIcon /> : null}
                  </span>
                  <div className="streak-dropdown__content">
                    <p className="streak-dropdown__title">{task.title}</p>
                    <p className="streak-dropdown__progress">
                      Tiến độ: {Math.min(task.current, task.target)}/{task.target}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>

          <p className="streak-dropdown__footer">
            Hoàn thành tất cả nhiệm vụ để nhận phần thưởng đặc biệt! 🔥
          </p>
        </div>
      )}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.2 5 8.7 9.5 3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

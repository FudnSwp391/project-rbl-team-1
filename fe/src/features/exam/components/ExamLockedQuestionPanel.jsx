import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ExamLockedQuestionPanel({ exam }) {
  const [currentIndex, setCurrentIndex] = useState(1)
  const currentQuestion = exam.questions[currentIndex - 1]
  const isFirst = currentIndex <= 1
  const isLast = currentIndex >= exam.totalQuestions

  const goPrev = () => {
    setCurrentIndex((value) => Math.max(1, value - 1))
  }

  const goNext = () => {
    setCurrentIndex((value) => Math.min(exam.totalQuestions, value + 1))
  }

  if (!currentQuestion) return null

  return (
    <section className="exam-question-panel">
      <div className="exam-question-panel__head">
        <div>
          <h2>Câu hỏi {currentIndex}</h2>
          <p>Đáp án bị khóa — nâng cấp Premium để xem chi tiết</p>
        </div>
        <Link to="/pricing" className="exam-question-panel__unlock">
          <CrownIcon />
          Mở khóa đáp án
        </Link>
      </div>

      <div className="exam-question-panel__layout">
        <div className="exam-question-panel__main">
          <h3>{currentQuestion.questionText}</h3>

          <ul className="exam-question-panel__options">
            {currentQuestion.options.map((option) => (
              <li key={option.id} className="exam-question-panel__option exam-question-panel__option--locked">
                <span className="exam-question-panel__option-label">{option.label}</span>
                <span className="exam-question-panel__option-text">Nội dung đáp án bị khóa</span>
                <LockIcon />
              </li>
            ))}
          </ul>

          <div className="exam-question-panel__toolbar">
            <div className="exam-question-panel__actions exam-question-panel__actions--locked">
              <button type="button" disabled aria-label="Đánh dấu">
                <BookmarkIcon />
              </button>
              <button type="button" disabled aria-label="Báo cáo">
                <FlagIcon />
              </button>
              <button type="button" disabled aria-label="Chia sẻ">
                <ShareIcon />
              </button>
            </div>

            <div className="exam-question-panel__pager">
              <button
                type="button"
                onClick={goPrev}
                disabled={isFirst}
                aria-label="Câu trước"
              >
                <ChevronLeftIcon />
              </button>
              <span>
                {currentIndex} / {exam.totalQuestions}
              </span>
              <button
                type="button"
                onClick={goNext}
                disabled={isLast}
                aria-label="Câu sau"
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>

        <aside className="exam-comments exam-comments--locked">
          <h3>Bình luận</h3>
          <div className="exam-comments__locked-box">
            <span className="exam-comments__lock-icon" aria-hidden="true">
              <LockIcon />
            </span>
            <p className="exam-comments__title">Bình luận bị khóa</p>
            <p className="exam-comments__desc">
              Nâng cấp Premium để xem và gửi bình luận
            </p>
            <Link to="/pricing" className="exam-comments__cta">
              Nâng cấp Premium
            </Link>
          </div>
          <div className="exam-comments__input exam-comments__input--locked">
            Viết bình luận của bạn...
          </div>
        </aside>
      </div>
    </section>
  )
}

function CrownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 12h12M3.5 12 4 6l2.5 2L8 4l1.5 4L12 6l.5 6"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function BookmarkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 2.5h8v11L8 11 4 13.5V2.5Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function FlagIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 2.5v11M3.5 3.5h7l-1.5 2.5L10.5 8.5h-7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="12" cy="4" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="4" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5.4 7.1 10.6 4.9M5.4 8.9l5.2 2.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

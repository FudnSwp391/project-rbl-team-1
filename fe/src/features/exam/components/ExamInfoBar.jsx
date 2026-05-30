import { Link } from 'react-router-dom'

export default function ExamInfoBar({ exam, isPremium = false }) {
  return (
    <section className="exam-info-bar">
      <div className="exam-info-bar__head">
        <h1>Thông tin đề thi</h1>
        {isPremium ? (
          <Link to="/pricing" className="exam-info-bar__start exam-info-bar__start--active">
            <PlayIcon />
            Bắt đầu làm bài
          </Link>
        ) : (
          <button type="button" className="exam-info-bar__start" disabled aria-disabled="true">
            <LockIcon />
            Bắt đầu làm bài
          </button>
        )}
      </div>

      <dl className="exam-info-bar__meta">
        <div>
          <dt>Mã đề</dt>
          <dd>{exam.code}</dd>
        </div>
        <div>
          <dt>Loại đề</dt>
          <dd>{exam.examType}</dd>
        </div>
        <div>
          <dt>Tổng số câu</dt>
          <dd>{exam.totalQuestions}</dd>
        </div>
      </dl>

      {!isPremium ? (
        <p className="exam-info-bar__premium-note">
          <LockIcon />
          Nâng cấp Premium để làm bài thi, xem đáp án và bình luận
        </p>
      ) : null}
    </section>
  )
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 3.5 12 8 4 12.5V3.5Z" fill="currentColor" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface QuestionControlsProps {
  currentIndex: number
  totalCount: number
  canGoPrevious: boolean
  canGoNext: boolean
  onPrevious: () => void
  onNext: () => void
}

export default function QuestionControls({
  currentIndex,
  totalCount,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
}: QuestionControlsProps) {
  return (
    <div className="question-controls">
      <div className="question-controls__tools">
        <button type="button" className="question-controls__tool" aria-label="Xáo trộn">
          <ShuffleIcon />
        </button>
        <button type="button" className="question-controls__tool question-controls__tool--active" aria-label="Mở rộng">
          <ExpandIcon />
        </button>
        <button type="button" className="question-controls__tool question-controls__tool--active" aria-label="Xem">
          <EyeIcon />
        </button>
      </div>

      <div className="question-controls__pagination">
        <button
          type="button"
          className="question-controls__nav"
          onClick={onPrevious}
          disabled={!canGoPrevious}
          aria-label="Câu trước"
        >
          <ChevronLeftIcon />
        </button>
        <span className="question-controls__page">
          {EXAM_DETAIL_STRINGS.QUESTION.PAGINATION(currentIndex, totalCount)}
        </span>
        <button
          type="button"
          className="question-controls__nav"
          onClick={onNext}
          disabled={!canGoNext}
          aria-label="Câu tiếp"
        >
          <ChevronRightIcon />
        </button>
      </div>

      <button type="button" className="question-controls__tool" aria-label="Tùy chọn">
        <MoreIcon />
      </button>
    </div>
  )
}

function ShuffleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M2 4h8M10 4l2-2M10 4l2 2M13 11H5M3 11l-2 2M3 11l-2-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function ExpandIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 2H2v4M10 2h4v4M10 14h4v-4M6 14H2v-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
      <path d="M1 7s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
      <path d="M6.5 1 1.5 6l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden="true">
      <path d="M1.5 1 6.5 6l-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function MoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="4" r="1.2" fill="currentColor" />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" />
      <circle cx="8" cy="12" r="1.2" fill="currentColor" />
    </svg>
  )
}

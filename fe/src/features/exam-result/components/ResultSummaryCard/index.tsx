import StatBox from '@/features/exam-result/components/StatBox'
import { formatScore } from '@/features/exam-result/services'
import type { ExamResultSummary } from '@/features/exam-result/types'
import { EXAM_RESULT_STRINGS } from '@/features/exam-result/types'

interface ResultSummaryCardProps {
  summary: ExamResultSummary
  onExport?: () => void
}

export default function ResultSummaryCard({ summary, onExport }: ResultSummaryCardProps) {
  return (
    <section className="exam-result-summary">
      <div className="exam-result-summary__header">
        <div className="exam-result-summary__info">
          <div className="exam-result-summary__code-row">
            <span className="exam-result-summary__code-badge">
              {EXAM_RESULT_STRINGS.SUMMARY.EXAM_CODE_LABEL}
            </span>
            <code className="exam-result-summary__code">{summary.examCode}</code>
          </div>
          <div className="exam-result-summary__meta">
            <span className="exam-result-summary__title">{summary.examTitle}</span>
            <span className="exam-result-summary__dot" aria-hidden="true">
              •
            </span>
            <span className="exam-result-summary__total">
              {EXAM_RESULT_STRINGS.SUMMARY.TOTAL_QUESTIONS(summary.totalQuestions)}
            </span>
          </div>
        </div>

        <button type="button" className="exam-result-summary__export" onClick={onExport}>
          <DownloadIcon />
          <span>{EXAM_RESULT_STRINGS.SUMMARY.EXPORT}</span>
        </button>
      </div>

      <div className="exam-result-summary__stats">
        <StatBox
          variant="score"
          label={EXAM_RESULT_STRINGS.SUMMARY.SCORE_LABEL}
          value={formatScore(summary.score)}
          subtext={
            <>
              Xếp loại:{' '}
              <strong className="exam-result-summary__grade">{summary.grade}</strong>
            </>
          }
        />
        <StatBox
          variant="correct"
          label={EXAM_RESULT_STRINGS.SUMMARY.CORRECT_LABEL}
          value={String(summary.correctCount)}
          subtext={EXAM_RESULT_STRINGS.SUMMARY.ACCURACY(summary.accuracyPercent)}
        />
        <StatBox
          variant="incorrect"
          label={EXAM_RESULT_STRINGS.SUMMARY.INCORRECT_LABEL}
          value={String(summary.incorrectCount)}
          subtext={EXAM_RESULT_STRINGS.SUMMARY.REVIEW_HINT}
        />
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 2v8M5 7l3 3 3-3M3 12v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

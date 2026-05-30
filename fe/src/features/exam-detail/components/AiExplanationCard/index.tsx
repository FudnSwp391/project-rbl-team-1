import AiChatInput from '@/features/exam-detail/components/AiChatInput'
import type { AiExplanation } from '@/features/exam-detail/types'
import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface AiExplanationCardProps {
  explanation: AiExplanation
  onRegenerate?: () => void
  showChatInput?: boolean
  usedTokens?: number
  totalTokens?: number
  onSubmitQuestion?: (values: { question: string }) => void
}

export default function AiExplanationCard({
  explanation,
  onRegenerate,
  showChatInput = false,
  usedTokens = EXAM_DETAIL_STRINGS.AI_TOKENS.USED,
  totalTokens = EXAM_DETAIL_STRINGS.AI_TOKENS.TOTAL,
  onSubmitQuestion,
}: AiExplanationCardProps) {
  return (
    <section className="ai-explanation-card">
      <div className="ai-explanation-card__header">
        <div className="ai-explanation-card__title-group">
          <span className="ai-explanation-card__icon" aria-hidden="true">
            <SparkleIcon />
          </span>
          <h4 className="ai-explanation-card__title">{EXAM_DETAIL_STRINGS.AI.TITLE}</h4>
        </div>
        <button type="button" className="ai-explanation-card__regenerate" onClick={onRegenerate}>
          {EXAM_DETAIL_STRINGS.AI.REGENERATE}
        </button>
      </div>

      <div className="ai-explanation-card__body">
        {explanation.intro.map((paragraph) => (
          <p key={paragraph} className="ai-explanation-card__paragraph">
            {paragraph}
          </p>
        ))}

        <ul className="ai-explanation-card__list">
          {explanation.bullets.map((bullet) => (
            <li key={bullet.term} className="ai-explanation-card__list-item">
              <strong>{bullet.term}</strong>
              <span>{bullet.description}</span>
            </li>
          ))}
        </ul>

        <div className="ai-explanation-card__note">
          <strong>{EXAM_DETAIL_STRINGS.AI.NOTE_PREFIX}</strong> {explanation.note}
        </div>

        {showChatInput && onSubmitQuestion ? (
          <AiChatInput
            usedTokens={usedTokens}
            totalTokens={totalTokens}
            onSubmit={onSubmitQuestion}
          />
        ) : null}
      </div>
    </section>
  )
}

function SparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M9 1.5 10.2 6.8 15.5 8 10.2 9.2 9 14.5 7.8 9.2 2.5 8l5.3-1.2L9 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

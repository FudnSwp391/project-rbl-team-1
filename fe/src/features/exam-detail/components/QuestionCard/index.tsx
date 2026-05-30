import QuestionControls from '@/features/exam-detail/components/QuestionControls'
import QuestionOptionItem from '@/features/exam-detail/components/QuestionOptionItem'
import type { QuestionData } from '@/features/exam-detail/types'

interface QuestionCardProps {
  question: QuestionData
  currentIndex: number
  canGoPrevious: boolean
  canGoNext: boolean
  onPrevious: () => void
  onNext: () => void
}

export default function QuestionCard({
  question,
  currentIndex,
  canGoPrevious,
  canGoNext,
  onPrevious,
  onNext,
}: QuestionCardProps) {
  return (
    <article className="question-card">
      <h3 className="question-card__text">{question.text}</h3>

      <div className="question-card__options">
        {question.options.map((option) => (
          <QuestionOptionItem key={option.id} option={option} />
        ))}
      </div>

      <QuestionControls
        currentIndex={currentIndex}
        totalCount={question.totalCount}
        canGoPrevious={canGoPrevious}
        canGoNext={canGoNext}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </article>
  )
}

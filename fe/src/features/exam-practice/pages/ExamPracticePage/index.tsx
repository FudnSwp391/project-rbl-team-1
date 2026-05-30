import { useCallback } from 'react'
import Spinner from '@/shared/components/Spinner'
import FloatingChatButton from '@/features/payment/components/FloatingChatButton'
import SubscriptionHeader from '@/features/subscription/components/SubscriptionHeader'
import SubscriptionSidebar from '@/features/subscription/components/SubscriptionSidebar'
import AiExplanationCard from '@/features/exam-detail/components/AiExplanationCard'
import CommentSection from '@/features/exam-detail/components/CommentSection'
import ExamBackLink from '@/features/exam-detail/components/ExamBackLink'
import ExamInfoBar from '@/features/exam-detail/components/ExamInfoBar'
import ExamQuestionHeader from '@/features/exam-detail/components/ExamQuestionHeader'
import QuestionCard from '@/features/exam-detail/components/QuestionCard'
import RelatedExamsCard from '@/features/exam-detail/components/RelatedExamsCard'
import useExamDetail from '@/features/exam-detail/hooks/useExamDetail'
import useExamDetailParams from '@/features/exam-detail/hooks/useExamDetailParams'
import useQuestionNavigation from '@/features/exam-detail/hooks/useQuestionNavigation'
import ExamDetailQueryProvider from '@/features/exam-detail/providers/ExamDetailQueryProvider'
import {
  EXAM_DETAIL_STRINGS,
  type AiQuestionFormValues,
  type CommentFormValues,
} from '@/features/exam-detail/types'
import '@/features/exam-detail/exam-detail.css'
import '@/features/subscription/subscription.css'

function ExamPracticePageContent() {
  const { examId } = useExamDetailParams()
  const { data, isPending, isError } = useExamDetail(examId)

  const totalCount = data?.question.totalCount ?? 50
  const {
    currentQuestionIndex,
    canGoPrevious,
    canGoNext,
    goToPreviousQuestion,
    goToNextQuestion,
  } = useQuestionNavigation(totalCount)

  const handleSubmitComment = useCallback((_values: CommentFormValues) => {
    // Placeholder for future API integration
  }, [])

  const handleSubmitAiQuestion = useCallback((_values: AiQuestionFormValues) => {
    // Placeholder for future AI chat integration
  }, [])

  if (isPending || !data) {
    return (
      <div className="exam-detail-page exam-detail-page--loading">
        <Spinner size="lg" />
        <p>{EXAM_DETAIL_STRINGS.LOADING}</p>
      </div>
    )
  }

  return (
    <div className="exam-detail-page exam-detail-page--practice">
      <SubscriptionHeader
        userEmail={EXAM_DETAIL_STRINGS.PRACTICE_USER.EMAIL}
        userInitial={EXAM_DETAIL_STRINGS.PRACTICE_USER.INITIAL}
        notificationCount={EXAM_DETAIL_STRINGS.PRACTICE_USER.NOTIFICATION_COUNT}
        streakCount={EXAM_DETAIL_STRINGS.PRACTICE_USER.STREAK_COUNT}
        searchPlaceholder={EXAM_DETAIL_STRINGS.HEADER.SEARCH_PLACEHOLDER}
      />

      <div className="exam-detail-page__body">
        <SubscriptionSidebar />

        <main className="exam-detail-page__main">
          <ExamBackLink />

          {isError ? (
            <p className="exam-detail-page__error" role="alert">
              {EXAM_DETAIL_STRINGS.ERROR}
            </p>
          ) : null}

          <ExamInfoBar examInfo={data.examInfo} />

          <section className="exam-detail-page__question-area">
            <ExamQuestionHeader examCode={data.examInfo.examCode} startVariant="success" />

            <div className="exam-detail-page__content-grid">
              <div className="exam-detail-page__question-column">
                <QuestionCard
                  question={data.question}
                  currentIndex={currentQuestionIndex}
                  canGoPrevious={canGoPrevious}
                  canGoNext={canGoNext}
                  onPrevious={goToPreviousQuestion}
                  onNext={goToNextQuestion}
                />
                <AiExplanationCard
                  explanation={data.aiExplanation}
                  showChatInput
                  onSubmitQuestion={handleSubmitAiQuestion}
                />
              </div>

              <CommentSection
                comments={data.comments}
                commentCount={data.commentCount}
                onSubmitComment={handleSubmitComment}
              />
            </div>
          </section>

          <RelatedExamsCard exams={data.relatedExams} />
        </main>
      </div>

      <FloatingChatButton />
    </div>
  )
}

export default function ExamPracticePage() {
  return (
    <ExamDetailQueryProvider>
      <ExamPracticePageContent />
    </ExamDetailQueryProvider>
  )
}

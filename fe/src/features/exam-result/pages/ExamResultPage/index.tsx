import { useCallback } from 'react'
import Spinner from '@/shared/components/Spinner'
import FloatingChatButton from '@/features/payment/components/FloatingChatButton'
import SubscriptionHeader from '@/features/subscription/components/SubscriptionHeader'
import SubscriptionSidebar from '@/features/subscription/components/SubscriptionSidebar'
import ResultBackLink from '@/features/exam-result/components/ResultBackLink'
import ResultBreadcrumb from '@/features/exam-result/components/ResultBreadcrumb'
import ResultQuestionCard from '@/features/exam-result/components/ResultQuestionCard'
import ResultSummaryCard from '@/features/exam-result/components/ResultSummaryCard'
import useExamResult from '@/features/exam-result/hooks/useExamResult'
import useExamResultParams from '@/features/exam-result/hooks/useExamResultParams'
import ExamResultQueryProvider from '@/features/exam-result/providers/ExamResultQueryProvider'
import { EXAM_RESULT_STRINGS } from '@/features/exam-result/types'
import '@/features/exam-result/exam-result.css'
import '@/features/subscription/subscription.css'

function ExamResultPageContent() {
  const { examId } = useExamResultParams()
  const { data, isPending, isError } = useExamResult(examId)

  const handleExport = useCallback(() => {
    // Placeholder for future export integration
  }, [])

  const handleViewExplanation = useCallback((_questionId: string) => {
    // Placeholder for future navigation to explanation
  }, [])

  if (isPending || !data) {
    return (
      <div className="exam-result-page exam-result-page--loading">
        <Spinner size="lg" />
        <p>{EXAM_RESULT_STRINGS.LOADING}</p>
      </div>
    )
  }

  return (
    <div className="exam-result-page">
      <SubscriptionHeader
        userEmail={EXAM_RESULT_STRINGS.MOCK_USER.EMAIL}
        userInitial={EXAM_RESULT_STRINGS.MOCK_USER.INITIAL}
        notificationCount={EXAM_RESULT_STRINGS.MOCK_USER.NOTIFICATION_COUNT}
        streakCount={EXAM_RESULT_STRINGS.MOCK_USER.STREAK_COUNT}
        searchPlaceholder={EXAM_RESULT_STRINGS.HEADER.SEARCH_PLACEHOLDER}
      />

      <div className="exam-result-page__body">
        <SubscriptionSidebar />

        <main className="exam-result-page__main">
          <header className="exam-result-page__header">
            <ResultBackLink to={examId ? `/exam/${examId}` : '/exams'} />
            <h1 className="exam-result-page__title">{EXAM_RESULT_STRINGS.PAGE_TITLE}</h1>
            <ResultBreadcrumb />
          </header>

          {isError ? (
            <p className="exam-result-page__error" role="alert">
              {EXAM_RESULT_STRINGS.ERROR}
            </p>
          ) : null}

          <ResultSummaryCard summary={data.summary} onExport={handleExport} />

          <section className="exam-result-page__questions" aria-label="Question review">
            {data.questions.map((question) => (
              <ResultQuestionCard
                key={question.id}
                question={question}
                onViewExplanation={handleViewExplanation}
              />
            ))}
          </section>
        </main>
      </div>

      <FloatingChatButton />
    </div>
  )
}

export default function ExamResultPage() {
  return (
    <ExamResultQueryProvider>
      <ExamResultPageContent />
    </ExamResultQueryProvider>
  )
}

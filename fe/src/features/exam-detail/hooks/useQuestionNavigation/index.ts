import { useExamDetailStore } from '@/features/exam-detail/stores/examDetailStore'

export default function useQuestionNavigation(totalQuestions: number) {
  const currentQuestionIndex = useExamDetailStore((state) => state.currentQuestionIndex)
  const goToPreviousQuestion = useExamDetailStore((state) => state.goToPreviousQuestion)
  const goToNextQuestion = useExamDetailStore((state) => state.goToNextQuestion)

  return {
    currentQuestionIndex,
    canGoPrevious: currentQuestionIndex > 1,
    canGoNext: currentQuestionIndex < totalQuestions,
    goToPreviousQuestion: () => goToPreviousQuestion(totalQuestions),
    goToNextQuestion: () => goToNextQuestion(totalQuestions),
  }
}

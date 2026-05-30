import { create } from 'zustand'

interface ExamDetailStore {
  currentQuestionIndex: number
  setQuestionIndex: (index: number) => void
  goToPreviousQuestion: (total: number) => void
  goToNextQuestion: (total: number) => void
}

export const useExamDetailStore = create<ExamDetailStore>((set, get) => ({
  currentQuestionIndex: 1,
  setQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  goToPreviousQuestion: (total) => {
    const nextIndex = Math.max(1, get().currentQuestionIndex - 1)
    set({ currentQuestionIndex: Math.min(nextIndex, total) })
  },
  goToNextQuestion: (total) => {
    const nextIndex = Math.min(total, get().currentQuestionIndex + 1)
    set({ currentQuestionIndex: Math.max(1, nextIndex) })
  },
}))

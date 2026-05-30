import { fetchExamResult } from '@/features/exam-result/api'
import type { ExamResultData } from '@/features/exam-result/types'

const DEFAULT_EXAM_RESULT: ExamResultData = {
  summary: {
    examCode: 'FEPRF192FA24BL5FE',
    examTitle: 'Fall 2024 Final Examination',
    totalQuestions: 38,
    score: 0.5,
    grade: 'F',
    correctCount: 2,
    accuracyPercent: 5.2,
    incorrectCount: 36,
  },
  questions: [
    {
      id: 'q1',
      number: 1,
      text: 'Identify the primary benefit of Object-Oriented Programming.',
      status: 'correct',
      options: [
        { id: 'a', label: 'A', text: 'Linear execution flow', state: 'neutral' },
        {
          id: 'b',
          label: 'B',
          text: 'Modular code and reusability',
          state: 'correct',
        },
        { id: 'c', label: 'C', text: 'Lower memory consumption', state: 'neutral' },
      ],
    },
    {
      id: 'q2',
      number: 2,
      text: 'Which complexity class does the QuickSort algorithm belong to in its average case?',
      status: 'incorrect',
      options: [
        {
          id: 'a',
          label: 'A',
          text: 'O(n²)',
          state: 'user-wrong',
          sublabel: 'YOUR_CHOICE',
        },
        {
          id: 'b',
          label: 'B',
          text: 'O(n log n)',
          state: 'correct',
          sublabel: 'CORRECT_ANSWER',
        },
        { id: 'c', label: 'C', text: 'O(n)', state: 'neutral' },
      ],
    },
  ],
}

export const getDefaultExamResultData = (): ExamResultData => ({
  summary: { ...DEFAULT_EXAM_RESULT.summary },
  questions: DEFAULT_EXAM_RESULT.questions.map((question) => ({
    ...question,
    options: question.options.map((option) => ({ ...option })),
  })),
})

export const normalizeExamResultData = (
  payload: Partial<ExamResultData> | undefined,
): ExamResultData => {
  const fallback = getDefaultExamResultData()

  return {
    summary: {
      examCode: payload?.summary?.examCode || fallback.summary.examCode,
      examTitle: payload?.summary?.examTitle || fallback.summary.examTitle,
      totalQuestions: payload?.summary?.totalQuestions ?? fallback.summary.totalQuestions,
      score: payload?.summary?.score ?? fallback.summary.score,
      grade: payload?.summary?.grade || fallback.summary.grade,
      correctCount: payload?.summary?.correctCount ?? fallback.summary.correctCount,
      accuracyPercent: payload?.summary?.accuracyPercent ?? fallback.summary.accuracyPercent,
      incorrectCount: payload?.summary?.incorrectCount ?? fallback.summary.incorrectCount,
    },
    questions: payload?.questions?.length ? payload.questions : fallback.questions,
  }
}

export const loadExamResultData = async (examId?: string): Promise<ExamResultData> => {
  if (!examId) {
    return getDefaultExamResultData()
  }

  try {
    const response = await Promise.race([
      fetchExamResult(examId),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Exam result API timeout')), 3000)
      }),
    ])
    return normalizeExamResultData(response.data)
  } catch {
    return getDefaultExamResultData()
  }
}

export const formatScore = (score: number): string => score.toFixed(2)

import { useQuery } from '@tanstack/react-query'
import { getDefaultExamResultData, loadExamResultData } from '@/features/exam-result/services'

export const EXAM_RESULT_QUERY_KEY = ['exam', 'result'] as const

export default function useExamResult(examId?: string) {
  return useQuery({
    queryKey: [...EXAM_RESULT_QUERY_KEY, examId ?? 'default'],
    queryFn: () => loadExamResultData(examId),
    placeholderData: getDefaultExamResultData(),
  })
}

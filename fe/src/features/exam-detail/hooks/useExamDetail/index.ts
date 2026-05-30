import { useQuery } from '@tanstack/react-query'
import { getDefaultExamDetailData, loadExamDetailData } from '@/features/exam-detail/services'

export const EXAM_DETAIL_QUERY_KEY = ['exam', 'detail'] as const

export default function useExamDetail(examId?: string) {
  return useQuery({
    queryKey: [...EXAM_DETAIL_QUERY_KEY, examId ?? 'default'],
    queryFn: () => loadExamDetailData(examId),
    placeholderData: getDefaultExamDetailData(),
  })
}

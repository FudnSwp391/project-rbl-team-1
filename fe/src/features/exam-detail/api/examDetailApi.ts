import axiosInstance from '@/shared/utils/axiosInstance'
import type { ExamDetailData } from '@/features/exam-detail/types'

const EXAM_DETAIL_BASE = '/exams'

export const fetchExamDetail = (examId: string) =>
  axiosInstance.get<ExamDetailData>(`${EXAM_DETAIL_BASE}/${examId}/detail`)

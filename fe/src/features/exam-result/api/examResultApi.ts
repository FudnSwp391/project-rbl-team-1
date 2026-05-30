import axiosInstance from '@/shared/utils/axiosInstance'
import type { ExamResultData } from '@/features/exam-result/types'

export const fetchExamResult = (examId: string) =>
  axiosInstance.get<ExamResultData>(`/exams/${examId}/results`)

import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const getExams = (params) => axiosInstance.get(API_PATHS.EXAMS, { params })
export const getExamById = (id) => axiosInstance.get(`${API_PATHS.EXAMS}/${id}`)
export const submitExam = (id, payload) =>
  axiosInstance.post(`${API_PATHS.EXAMS}/${id}/submit`, payload)

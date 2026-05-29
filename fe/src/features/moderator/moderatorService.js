import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const getReports = (params) => axiosInstance.get(`${API_PATHS.MOD}/reports`, { params })
export const reviewContent = (id, payload) =>
  axiosInstance.post(`${API_PATHS.MOD}/review/${id}`, payload)

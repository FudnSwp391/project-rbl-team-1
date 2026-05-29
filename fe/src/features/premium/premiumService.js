import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const getPlans = () => axiosInstance.get(`${API_PATHS.PREMIUM}/plans`)
export const checkout = (payload) => axiosInstance.post(`${API_PATHS.PREMIUM}/checkout`, payload)

import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const getProfile = (userId) =>
  axiosInstance.get(userId ? `${API_PATHS.PROFILE}/${userId}` : API_PATHS.PROFILE)
export const updateProfile = (payload) => axiosInstance.put(API_PATHS.PROFILE, payload)

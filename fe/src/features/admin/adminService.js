import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const getDashboard = () => axiosInstance.get(`${API_PATHS.ADMIN}/dashboard`)
export const getUsers = (params) => axiosInstance.get(`${API_PATHS.ADMIN}/users`, { params })
export const updateUserRole = (id, payload) =>
  axiosInstance.patch(`${API_PATHS.ADMIN}/users/${id}/role`, payload)

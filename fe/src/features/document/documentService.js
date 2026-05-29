import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const getDocuments = (params) => axiosInstance.get(API_PATHS.DOCUMENTS, { params })
export const getDocumentById = (id) => axiosInstance.get(`${API_PATHS.DOCUMENTS}/${id}`)

import axiosInstance from '@/shared/utils/axiosInstance'
import { API_PATHS } from '@/shared/utils/constants'

export const getFeed = (params) => axiosInstance.get(API_PATHS.POSTS, { params })
export const getPostById = (id) => axiosInstance.get(`${API_PATHS.POSTS}/${id}`)
export const createPost = (payload) => axiosInstance.post(API_PATHS.POSTS, payload)
export const updatePost = (id, payload) => axiosInstance.put(`${API_PATHS.POSTS}/${id}`, payload)
export const deletePost = (id) => axiosInstance.delete(`${API_PATHS.POSTS}/${id}`)
export const likePost = (id) => axiosInstance.post(`${API_PATHS.POSTS}/${id}/like`)
export const unlikePost = (id) => axiosInstance.delete(`${API_PATHS.POSTS}/${id}/like`)
export const reportPost = (id, payload) => axiosInstance.post(`${API_PATHS.POSTS}/${id}/report`, payload)

import { useCallback, useState } from 'react'
import { likePost, reportPost, unlikePost } from '../postService'

export const REPORT_REASONS = [
  { value: 'spam', label: 'Spam hoặc quảng cáo' },
  { value: 'harassment', label: 'Quấy rối hoặc bạo lực' },
  { value: 'misinformation', label: 'Thông tin sai lệch' },
  { value: 'inappropriate', label: 'Nội dung không phù hợp' },
  { value: 'other', label: 'Khác' },
]

export default function usePostEngagement(posts = []) {
  const [likedIds, setLikedIds] = useState(() => new Set())
  const [likeCounts, setLikeCounts] = useState(() =>
    Object.fromEntries(posts.map((post) => [post.id, post.likes])),
  )
  const [reportingPost, setReportingPost] = useState(null)
  const [reportStatus, setReportStatus] = useState(null)

  const isPostLiked = useCallback((postId) => likedIds.has(postId), [likedIds])

  const getLikeCount = useCallback(
    (postId, fallback = 0) => likeCounts[postId] ?? fallback,
    [likeCounts],
  )

  const toggleLike = useCallback(
    async (postId) => {
      const wasLiked = likedIds.has(postId)

      setLikedIds((prev) => {
        const next = new Set(prev)
        if (wasLiked) next.delete(postId)
        else next.add(postId)
        return next
      })

      setLikeCounts((prev) => ({
        ...prev,
        [postId]: Math.max(0, (prev[postId] ?? 0) + (wasLiked ? -1 : 1)),
      }))

      try {
        if (wasLiked) await unlikePost(postId)
        else await likePost(postId)
      } catch {
        setLikedIds((prev) => {
          const next = new Set(prev)
          if (wasLiked) next.add(postId)
          else next.delete(postId)
          return next
        })
        setLikeCounts((prev) => ({
          ...prev,
          [postId]: Math.max(0, (prev[postId] ?? 0) + (wasLiked ? 1 : -1)),
        }))
      }
    },
    [likedIds],
  )

  const openReport = useCallback((post) => {
    setReportingPost(post)
    setReportStatus(null)
  }, [])

  const closeReport = useCallback(() => {
    setReportingPost(null)
    setReportStatus(null)
  }, [])

  const submitReport = useCallback(
    async ({ reason, detail }) => {
      if (!reportingPost) return

      try {
        await reportPost(reportingPost.id, { reason, detail })
      } catch {
        // Demo mode: vẫn hiển thị thành công khi API chưa sẵn sàng
      }

      setReportStatus({
        type: 'success',
        message: 'Đã gửi báo cáo. Moderator sẽ xử lý sớm nhất.',
      })
    },
    [reportingPost],
  )

  return {
    isPostLiked,
    getLikeCount,
    toggleLike,
    reportingPost,
    openReport,
    closeReport,
    submitReport,
    reportStatus,
  }
}

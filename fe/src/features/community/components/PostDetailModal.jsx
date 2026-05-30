import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import PostDetailArticle from './PostDetailArticle'
import PostComments from './PostComments'

export default function PostDetailModal({
  post,
  onClose,
  isLiked = false,
  likeCount,
  onToggleLike,
  onReport,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div className="post-detail-modal" role="dialog" aria-modal="true" aria-labelledby="post-detail-modal-title">
      <button
        type="button"
        className="post-detail-modal__backdrop"
        onClick={onClose}
        aria-label="Đóng chi tiết bài viết"
      />

      <div className="post-detail-modal__panel">
        <header className="post-detail-modal__header">
          <h2 id="post-detail-modal-title">Chi tiết bài viết</h2>
          <button type="button" className="post-detail-modal__close" onClick={onClose} aria-label="Đóng">
            <CloseIcon />
          </button>
        </header>

        <div className="post-detail-modal__body">
          <PostDetailArticle
            post={post}
            isLiked={isLiked}
            likeCount={likeCount}
            onToggleLike={onToggleLike}
            onReport={onReport}
          />
          <PostComments comments={post.commentList ?? []} total={post.comments} />
        </div>
      </div>
    </div>,
    document.body,
  )
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

import type { ExamComment } from '@/features/exam-detail/types'
import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface CommentItemProps {
  comment: ExamComment
}

export default function CommentItem({ comment }: CommentItemProps) {
  const className = comment.isHighlighted
    ? 'comment-item comment-item--highlighted'
    : 'comment-item'

  const avatarClassName =
    comment.avatarTone === 'primary'
      ? 'comment-item__avatar comment-item__avatar--primary'
      : 'comment-item__avatar'

  return (
    <article className={className}>
      <div className="comment-item__header">
        <span className={avatarClassName}>{comment.authorInitials}</span>
        <div className="comment-item__meta">
          <strong className="comment-item__author">{comment.authorName}</strong>
          <span className="comment-item__time">{comment.timestamp}</span>
        </div>
      </div>

      <p className="comment-item__content">{comment.content}</p>

      <div className="comment-item__actions">
        <button
          type="button"
          className={comment.isLiked ? 'comment-item__like comment-item__like--active' : 'comment-item__like'}
        >
          <HeartIcon />
          <span>{comment.likeCount}</span>
        </button>
        <button type="button" className="comment-item__reply">
          {EXAM_DETAIL_STRINGS.COMMENTS.REPLY}
        </button>
      </div>
    </article>
  )
}

function HeartIcon() {
  return (
    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
      <path
        d="M7 12.2S1 8.2 1 4.6C1 2.7 2.5 1.2 4.4 1.2c1.1 0 2.1.5 2.6 1.3.5-.8 1.5-1.3 2.6-1.3 1.9 0 3.4 1.5 3.4 3.4C13 8.2 7 12.2 7 12.2Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

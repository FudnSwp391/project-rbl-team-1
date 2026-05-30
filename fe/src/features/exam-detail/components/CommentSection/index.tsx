import CommentInput from '@/features/exam-detail/components/CommentInput'
import CommentItem from '@/features/exam-detail/components/CommentItem'
import type { CommentFormValues, ExamComment } from '@/features/exam-detail/types'
import { EXAM_DETAIL_STRINGS } from '@/features/exam-detail/types'

interface CommentSectionProps {
  comments: ExamComment[]
  commentCount: number
  onSubmitComment: (values: CommentFormValues) => void
}

export default function CommentSection({
  comments,
  commentCount,
  onSubmitComment,
}: CommentSectionProps) {
  return (
    <aside className="comment-section">
      <div className="comment-section__header">
        <div className="comment-section__title-group">
          <h3 className="comment-section__title">{EXAM_DETAIL_STRINGS.COMMENTS.TITLE}</h3>
          <span className="comment-section__count">{commentCount}</span>
        </div>
        <button type="button" className="comment-section__view-all">
          {EXAM_DETAIL_STRINGS.COMMENTS.VIEW_ALL}
        </button>
      </div>

      <div className="comment-section__list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>

      <CommentInput onSubmit={onSubmitComment} />
    </aside>
  )
}

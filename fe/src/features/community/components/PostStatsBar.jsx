export default function PostStatsBar({
  likes,
  comments,
  views,
  isLiked = false,
  onToggleLike,
  onReport,
  onCommentClick,
}) {
  const stop = (event) => event.stopPropagation()

  return (
    <div className="community-post__stats" onClick={stop}>
      <div className="community-post__stats-left">
        <button
          type="button"
          className={`community-post__like${isLiked ? ' is-liked' : ''}`}
          aria-label={isLiked ? 'Bỏ thích bài viết' : 'Thích bài viết'}
          aria-pressed={isLiked}
          onClick={(event) => {
            stop(event)
            onToggleLike?.()
          }}
        >
          <HeartIcon filled={isLiked} />
          {likes}
        </button>
        <button
          type="button"
          className="community-post__comment"
          aria-label="Bình luận"
          onClick={(event) => {
            stop(event)
            onCommentClick?.()
          }}
        >
          <CommentIcon />
          {comments}
        </button>
        <span className="community-post__views">
          <EyeIcon />
          {views}
        </span>
      </div>

      <div className="community-post__stats-right">
        <button
          type="button"
          className="community-post__report"
          aria-label="Báo cáo bài viết"
          onClick={(event) => {
            stop(event)
            onReport?.()
          }}
        >
          <FlagIcon />
        </button>
        <button type="button" className="community-post__share" aria-label="Chia sẻ">
          <ShareIcon />
        </button>
      </div>
    </div>
  )
}

function HeartIcon({ filled }) {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
      <path
        d="M8 13.5 1.5 7.5c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0L8 3.5l1-1.5c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5L8 13.5Z"
        stroke="currentColor"
        strokeWidth="1.3"
        fill={filled ? 'currentColor' : 'none'}
      />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M1.5 2.5h12v8a1 1 0 0 1-1 1H5l-3 3V3.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
      <path d="M1 6s2.5-4 7.5-4 7.5 4 7.5 4-2.5 4-7.5 4S1 6 1 6Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8.5" cy="6" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function FlagIcon() {
  return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" aria-hidden="true">
      <path d="M2.5 1.5v12M2.5 2.5h7.5l-1.5 2.5 1.5 2.5H2.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" aria-hidden="true">
      <path d="M10 1.5 13 4.5 10 7.5M13 4.5H5a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

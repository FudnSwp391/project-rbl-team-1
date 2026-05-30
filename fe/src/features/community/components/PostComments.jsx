import { LOGGED_IN_USER } from '../loggedInMockData'

export default function PostComments({ comments = [], total = 0 }) {
  return (
    <section className="post-comments">
      <h2>Bình luận ({total})</h2>

      <form className="post-comments__form" onSubmit={(event) => event.preventDefault()}>
        <span
          className="post-comments__avatar"
          style={{ background: '#dbe1ff', color: '#004ac6' }}
        >
          {LOGGED_IN_USER.displayName.charAt(0).toUpperCase()}
        </span>
        <div className="post-comments__input-wrap">
          <textarea
            rows={3}
            placeholder="Viết bình luận của bạn..."
            aria-label="Viết bình luận"
          />
          <button type="submit">Gửi bình luận</button>
        </div>
      </form>

      <div className="post-comments__list">
        {comments.map((comment) => (
          <article key={comment.id} className="post-comment">
            <span
              className="post-comment__avatar"
              style={{ background: comment.avatarBg, color: comment.avatarColor }}
            >
              {comment.initial}
            </span>
            <div className="post-comment__content">
              <div className="post-comment__meta">
                <strong>{comment.author}</strong>
                <span>{comment.meta}</span>
              </div>
              <p>{comment.content}</p>
              <button type="button" className="post-comment__like">
                <HeartIcon />
                {comment.likes}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function HeartIcon() {
  return (
    <svg width="14" height="13" viewBox="0 0 16 15" fill="none" aria-hidden="true">
      <path d="M8 13.5 1.5 7.5c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0L8 3.5l1-1.5c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5L8 13.5Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

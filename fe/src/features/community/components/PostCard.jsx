export default function PostCard({ post }) {
  return (
    <article className="community-post">
      <div className="community-post__head">
        <div className="community-post__author">
          <span
            className="community-post__avatar"
            style={{ background: post.avatarBg, color: post.avatarColor }}
          >
            {post.initial}
          </span>
          <div>
            <strong>{post.author}</strong>
            <span>{post.meta}</span>
          </div>
        </div>
        <button type="button" className="community-post__menu" aria-label="Tùy chọn">
          •••
        </button>
      </div>

      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>

      <div className="community-post__tags">
        {post.tags.map((tag) => (
          <span key={tag} className="community-post__tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="community-post__stats">
        <div className="community-post__stats-left">
          <button type="button">
            <HeartIcon />
            {post.likes}
          </button>
          <button type="button">
            <CommentIcon />
            {post.comments}
          </button>
          <span>
            <EyeIcon />
            {post.views}
          </span>
        </div>
        <button type="button" className="community-post__share" aria-label="Chia sẻ">
          <ShareIcon />
        </button>
      </div>
    </article>
  )
}

function HeartIcon() {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" aria-hidden="true">
      <path d="M8 13.5 1.5 7.5c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0L8 3.5l1-1.5c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5L8 13.5Z" stroke="currentColor" strokeWidth="1.3" />
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

function ShareIcon() {
  return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" aria-hidden="true">
      <path d="M10 1.5 13 4.5 10 7.5M13 4.5H5a4 4 0 0 0-4 4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

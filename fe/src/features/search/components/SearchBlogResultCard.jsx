export default function SearchBlogResultCard({ blog }) {
  return (
    <article className="search-blog-card">
      <div className="search-blog-card__head">
        <span
          className="search-blog-card__avatar"
          style={{ background: blog.author.avatarBg, color: blog.author.avatarColor }}
        >
          {blog.author.initial}
        </span>
        <div className="search-blog-card__meta">
          <strong>{blog.author.name}</strong>
          <span className="search-blog-card__dot" aria-hidden="true" />
          <span>{blog.postedAt}</span>
        </div>
      </div>

      <p className="search-blog-card__excerpt">{blog.excerpt}</p>

      <div className="search-blog-card__stats">
        <div className="search-blog-card__stats-left">
          <button type="button">
            <HeartIcon />
            {blog.stats.likes}
          </button>
          <button type="button">
            <CommentIcon />
            {blog.stats.comments}
          </button>
          <span>
            <EyeIcon />
            {blog.stats.views}
          </span>
        </div>
        <button type="button" className="search-blog-card__menu" aria-label="Tùy chọn">
          •••
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

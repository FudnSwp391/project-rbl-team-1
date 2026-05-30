export default function ProfileRecentPosts({ posts }) {
  return (
    <section className="profile-section">
      <div className="profile-posts__head">
        <h2>
          <FileIcon />
          Bài viết gần đây
        </h2>
        <button type="button" className="profile-posts__view-all">
          Xem tất cả
        </button>
      </div>

      <div className="profile-posts__list">
        {posts.map((post) => (
          <article key={post.id} className="profile-posts__item">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="profile-posts__meta">
              <span>
                <HeartIcon />
                {post.likes}
              </span>
              <span>
                <CommentIcon />
                {post.comments}
              </span>
              <span>
                <EyeIcon />
                {post.views}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function FileIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M6 3h6l4 4v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="14" height="13" viewBox="0 0 16 15" fill="none" aria-hidden="true">
      <path d="M8 13.5 1.5 7.5c-1.5-1.5-1.5-4 0-5.5s4-1.5 5.5 0L8 3.5l1-1.5c1.5-1.5 4-1.5 5.5 0s1.5 4 0 5.5L8 13.5Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <path d="M1.5 2.5h12v8a1 1 0 0 1-1 1H5l-3 3V3.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="15" height="11" viewBox="0 0 17 12" fill="none" aria-hidden="true">
      <path d="M1 6s2.5-4 7.5-4 7.5 4 7.5 4-2.5 4-7.5 4S1 6 1 6Z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="8.5" cy="6" r="2" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  )
}

import PostStatsBar from './PostStatsBar'

export default function PostCard({ post, onOpen }) {
  const handleOpen = () => onOpen?.(post.id)

  return (
    <article className="community-post">
      <button type="button" className="community-post__open" onClick={handleOpen}>
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
          <span className="community-post__menu" aria-hidden="true">
            •••
          </span>
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
      </button>

      <PostStatsBar likes={post.likes} comments={post.comments} views={post.views} />
    </article>
  )
}

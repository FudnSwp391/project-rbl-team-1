import PostStatsBar from './PostStatsBar'

export default function PostDetailArticle({ post }) {
  return (
    <article className="community-post community-post--detail">
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

      <h1>{post.title}</h1>

      <div className="community-post__body">
        {(post.body ?? [post.excerpt]).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="community-post__tags">
        {post.tags.map((tag) => (
          <span key={tag} className="community-post__tag">
            {tag}
          </span>
        ))}
      </div>

      <PostStatsBar likes={post.likes} comments={post.comments} views={post.views} />
    </article>
  )
}

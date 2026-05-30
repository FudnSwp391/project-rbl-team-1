import { Link } from 'react-router-dom'
import { FEED_POSTS } from '../communityMockData'
import PostCard from '../components/PostCard'

export default function CommunityFeed() {
  return (
    <section className="community-feed">
      <div className="community-feed__header">
        <div className="community-feed__title-row">
          <h1>Bài viết mới nhất</h1>
          <Link to="/posts/create" className="community-feed__create">
            + Tạo bài viết
          </Link>
        </div>
        <div className="community-feed__filters-row">
          <span>2 bài viết hôm nay</span>
          <div className="community-feed__filters">
            <button type="button" className="community-feed__filter">
              Học kỳ 6
              <ChevronIcon />
            </button>
            <button type="button" className="community-feed__filter">
              Tất cả chuyên ngành
              <ChevronIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="community-feed__posts">
        {FEED_POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      <nav className="community-pagination" aria-label="Phân trang">
        <button type="button">Trước</button>
        <button type="button" className="community-pagination__active">
          1
        </button>
        <button type="button">2</button>
        <button type="button">3</button>
        <span>…</span>
        <button type="button">10</button>
        <button type="button">Tiếp theo</button>
      </nav>
    </section>
  )
}

function ChevronIcon() {
  return (
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
      <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

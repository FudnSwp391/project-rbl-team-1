import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '@/shared/hooks/useAuth'
import { FEED_POSTS, getPostById } from '../communityMockData'
import {
  DEFAULT_FEED_MAJOR,
  DEFAULT_FEED_SEMESTER,
  FEED_MAJOR_OPTIONS,
  FEED_SEMESTER_OPTIONS,
} from '../feedFilterConstants'
import usePostEngagement from '../hooks/usePostEngagement'
import PostCard from '../components/PostCard'
import PostDetailModal from '../components/PostDetailModal'
import ReportPostModal from '../components/ReportPostModal'
import '../post-detail.css'

function filterPosts(posts, semesterFilter, majorFilter) {
  return posts.filter((post) => {
    if (semesterFilter !== 'all' && post.semester !== Number(semesterFilter)) {
      return false
    }

    if (majorFilter !== 'all' && post.major !== majorFilter) {
      return false
    }

    return true
  })
}

export default function CommunityFeed() {
  const { isLoggedIn } = useAuth()
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [semesterFilter, setSemesterFilter] = useState(DEFAULT_FEED_SEMESTER)
  const [majorFilter, setMajorFilter] = useState(DEFAULT_FEED_MAJOR)
  const selectedPost = selectedPostId ? getPostById(selectedPostId) : null

  const filteredPosts = useMemo(
    () => filterPosts(FEED_POSTS, semesterFilter, majorFilter),
    [semesterFilter, majorFilter],
  )

  const todayCountLabel =
    filteredPosts.length === 0
      ? 'Không có bài viết phù hợp'
      : `${filteredPosts.length} bài viết hôm nay`

  const {
    isPostLiked,
    getLikeCount,
    toggleLike,
    reportingPost,
    openReport,
    closeReport,
    submitReport,
    reportStatus,
  } = usePostEngagement(FEED_POSTS)

  return (
    <section className="community-feed">
      <div className="community-feed__header">
        <div className="community-feed__title-row">
          <h1>Bài viết mới nhất</h1>
          {isLoggedIn ? (
            <Link to="/posts/create" className="community-feed__create">
              + Tạo bài viết
            </Link>
          ) : (
            <Link to="/login" className="community-feed__create">
              + Tạo bài viết
            </Link>
          )}
        </div>
        <div className="community-feed__filters-row">
          <span>{todayCountLabel}</span>
          <div className="community-feed__filters">
            <label className="community-feed__filter">
              <select
                value={semesterFilter}
                onChange={(event) => setSemesterFilter(event.target.value)}
                aria-label="Chọn học kỳ"
              >
                {FEED_SEMESTER_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </label>
            <label className="community-feed__filter">
              <select
                value={majorFilter}
                onChange={(event) => setMajorFilter(event.target.value)}
                aria-label="Chọn chuyên ngành"
              >
                {FEED_MAJOR_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronIcon />
            </label>
          </div>
        </div>
      </div>

      <div className="community-feed__posts">
        {filteredPosts.length === 0 ? (
          <div className="community-feed__empty">
            <p>Không có bài viết phù hợp với bộ lọc đã chọn.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onOpen={setSelectedPostId}
              isLiked={isPostLiked(post.id)}
              likeCount={getLikeCount(post.id, post.likes)}
              onToggleLike={toggleLike}
              onReport={() => openReport(post)}
            />
          ))
        )}
      </div>

      {filteredPosts.length > 0 ? (
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
      ) : null}

      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          onClose={() => setSelectedPostId(null)}
          isLiked={isPostLiked(selectedPost.id)}
          likeCount={getLikeCount(selectedPost.id, selectedPost.likes)}
          onToggleLike={toggleLike}
          onReport={() => openReport(selectedPost)}
        />
      )}

      {reportingPost ? (
        <ReportPostModal
          post={reportingPost}
          status={reportStatus}
          onClose={closeReport}
          onSubmit={submitReport}
        />
      ) : null}
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

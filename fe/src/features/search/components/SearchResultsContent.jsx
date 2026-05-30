import SearchBlogResultCard from './SearchBlogResultCard'
import SearchUserResultCard from './SearchUserResultCard'

export default function SearchResultsContent({ data, category }) {
  const showBlogs = category === 'all' || category === 'blogs'
  const showUsers = category === 'all' || category === 'users'
  const hasResults = data.blogs.length > 0 || data.users.length > 0

  if (!hasResults) {
    return (
      <div className="search-empty">
        <p className="search-empty__title">Không tìm thấy kết quả</p>
        <p className="search-empty__desc">Thử từ khóa khác hoặc chọn danh mục khác.</p>
      </div>
    )
  }

  return (
    <div className="search-results">
      {showBlogs && data.blogs.length > 0 && (
        <section className="search-results__section">
          <h2>Blogs</h2>
          <div className="search-results__list">
            {data.blogs.map((blog) => (
              <SearchBlogResultCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
      )}

      {showUsers && data.users.length > 0 && (
        <section className="search-results__section">
          <h2>Người dùng</h2>
          <div className="search-results__list search-results__list--users">
            {data.users.map((user) => (
              <SearchUserResultCard key={user.id} user={user} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

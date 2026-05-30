import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function FriendSearchHero() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('q') ?? ''
  const [query, setQuery] = useState(queryFromUrl)

  useEffect(() => {
    setQuery(queryFromUrl)
  }, [queryFromUrl])

  const handleSubmit = (event) => {
    event.preventDefault()
    const value = query.trim()
    if (!value) return
    navigate(`/friends?q=${encodeURIComponent(value)}`)
  }

  return (
    <section className="friends-hero">
      <h1>Tìm và kết nối với bạn bè trong cộng đồng SE HUB.</h1>
      <p>
        Tìm kiếm và kết nối với các thành viên khác. Click Follow hoặc Message để tương tác (yêu
        cầu đăng nhập).
      </p>

      <form className="friends-hero__form" onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Nhập tên, username hoặc mã sinh viên..."
          aria-label="Tìm kiếm bạn bè"
        />
        <button type="submit" aria-label="Tìm kiếm">
          <SearchIcon />
        </button>
      </form>
    </section>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.75" />
      <path d="M13.5 13.5 17 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}

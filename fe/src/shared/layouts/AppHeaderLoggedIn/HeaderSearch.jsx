import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HeaderSearch({ defaultQuery = '' }) {
  const navigate = useNavigate()
  const [value, setValue] = useState(defaultQuery)

  useEffect(() => {
    setValue(defaultQuery)
  }, [defaultQuery])

  const handleSubmit = (event) => {
    event.preventDefault()
    const query = value.trim()
    if (!query) return
    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form className="app-header-logged-in__search-form" onSubmit={handleSubmit}>
      <SearchIcon />
      <input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Tìm kiếm..."
        aria-label="Tìm kiếm"
      />
    </form>
  )
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
      <circle cx="6.5" cy="6.5" r="4.75" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 10.5 13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

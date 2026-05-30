export default function HeaderSearch() {
  return (
    <form className="app-header-logged-in__search-form" onSubmit={(e) => e.preventDefault()}>
      <SearchIcon />
      <input type="search" placeholder="Tìm kiếm..." aria-label="Tìm kiếm" />
    </form>
  )
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

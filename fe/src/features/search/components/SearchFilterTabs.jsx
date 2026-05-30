import { SEARCH_TABS } from '../searchMockData'

export default function SearchFilterTabs({ active, counts, onChange }) {
  return (
    <div className="search-tabs" role="tablist" aria-label="Lọc kết quả tìm kiếm">
      {SEARCH_TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={active === tab.id}
          className={`search-tabs__btn${active === tab.id ? ' search-tabs__btn--active' : ''}`}
          onClick={() => onChange(tab.id)}
        >
          {tab.label} ({counts[tab.countKey]})
        </button>
      ))}
    </div>
  )
}

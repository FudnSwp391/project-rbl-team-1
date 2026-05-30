import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import SearchFilterTabs from '../components/SearchFilterTabs'
import SearchResultsContent from '../components/SearchResultsContent'
import { getSearchResults } from '../searchMockData'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import '../search.css'

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') ?? ''
  const [category, setCategory] = useState('all')

  const results = useMemo(() => getSearchResults(query), [query])
  const totalCount = results.counts.all

  return (
    <div className="search-page">
      <AppHeaderLoggedIn searchQuery={query} />
      <main className="logged-in-page__main">
        <div className="logged-in-page__layout">
          <CommunitySidebar activeMain="home" homePath="/feed" />
          <div className="search-page__content">
            {query ? (
              <>
                <header className="search-page__header">
                  <h1>Kết quả tìm kiếm cho &quot;{query}&quot;</h1>
                  <p>Tìm thấy {totalCount} kết quả</p>
                </header>

                <SearchFilterTabs active={category} counts={results.counts} onChange={setCategory} />
                <SearchResultsContent data={results} category={category} />
              </>
            ) : (
              <div className="search-empty search-empty--prompt">
                <p className="search-empty__title">Nhập từ khóa để tìm kiếm</p>
                <p className="search-empty__desc">Sử dụng ô tìm kiếm trên thanh điều hướng.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

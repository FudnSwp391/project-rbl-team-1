import AppHeader from '@/shared/layouts/AppHeader'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '../components/CommunitySidebar'
import CommunityFeed from '../components/CommunityFeed'
import CommunitySidebarRight from '../components/CommunitySidebarRight'
import '@/shared/layouts/AppHeader/app-header.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '../community.css'

export default function CommunityPage() {
  return (
    <div className="community-page">
      <AppHeader activeNav="community" />
      <main className="community-page__main">
        <div className="community-page__layout">
          <CommunitySidebar />
          <CommunityFeed />
          <CommunitySidebarRight />
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '../components/CommunitySidebar'
import CommunityFeed from '../components/CommunityFeed'
import CommunityLoggedInSidebar from '../components/CommunityLoggedInSidebar'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '../community.css'

export default function LoggedInCommunityPage() {
  return (
    <div className="community-page community-page--logged-in">
      <AppHeaderLoggedIn />
      <main className="community-page__main">
        <div className="community-page__layout">
          <CommunitySidebar activeMain="home" homePath="/feed" />
          <CommunityFeed />
          <CommunityLoggedInSidebar />
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

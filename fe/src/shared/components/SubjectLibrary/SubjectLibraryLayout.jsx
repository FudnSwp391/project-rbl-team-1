import AppHeader from '@/shared/layouts/AppHeader'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import useAuth from '@/shared/hooks/useAuth'
import '@/shared/layouts/AppHeader/app-header.css'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import './subject-library.css'

export default function SubjectLibraryLayout({ activeSubject, children }) {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return (
      <div className="subject-library-page subject-library-page--logged-in">
        <AppHeaderLoggedIn />
        <main className="logged-in-page__main">
          <div className="logged-in-page__layout">
            <CommunitySidebar activeMain={null} activeSubject={activeSubject} />
            <div className="subject-library-page__main">{children}</div>
          </div>
        </main>
        <AppFooter />
      </div>
    )
  }

  return (
    <div className="community-page subject-library-page">
      <AppHeader activeNav="community" />
      <main className="community-page__main">
        <div className="community-page__layout community-page__layout--no-aside">
          <CommunitySidebar activeMain={null} activeSubject={activeSubject} />
          <div className="subject-library-page__main">{children}</div>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

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
            <CommunitySidebar
              activeMain={null}
              activeSubject={activeSubject}
              homePath="/feed"
            />
            <div className="subject-library-page__main">{children}</div>
          </div>
        </main>
        <AppFooter />
      </div>
    )
  }

  return (
    <div className="subject-library-page">
      <AppHeader activeNav="community" />
      <div className="subject-library-page__body">
        <CommunitySidebar activeMain={null} activeSubject={activeSubject} />
        <main className="subject-library-page__main">{children}</main>
      </div>
      <AppFooter />
    </div>
  )
}

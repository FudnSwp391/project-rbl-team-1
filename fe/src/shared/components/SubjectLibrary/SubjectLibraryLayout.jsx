import AppHeader from '@/shared/layouts/AppHeader'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import '@/shared/layouts/AppHeader/app-header.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import './subject-library.css'

export default function SubjectLibraryLayout({ activeSubject, children }) {
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

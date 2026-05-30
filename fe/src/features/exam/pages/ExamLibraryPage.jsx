import AppHeader from '@/shared/layouts/AppHeader'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import ExamLibraryContent from '../components/ExamLibraryContent'
import '@/shared/layouts/AppHeader/app-header.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import '../exam.css'

export default function ExamLibraryPage() {
  return (
    <div className="exam-page">
      <AppHeader activeNav="community" />
      <div className="exam-page__body">
        <CommunitySidebar activeMain={null} activeSubject="exams" />
        <main className="exam-page__main">
          <ExamLibraryContent />
        </main>
      </div>
      <AppFooter />
    </div>
  )
}

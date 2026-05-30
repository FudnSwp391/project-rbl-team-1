import AppHeader from '@/shared/layouts/AppHeader'
import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import useAuth from '@/shared/hooks/useAuth'
import FeedbackForm from '../components/FeedbackForm'
import '@/shared/layouts/AppHeader/app-header.css'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import '../feedback.css'

export default function FeedbackPage() {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return (
      <div className="feedback-page feedback-page--logged-in">
        <AppHeaderLoggedIn />
        <main className="logged-in-page__main">
          <div className="logged-in-page__layout">
            <CommunitySidebar activeMain={null} homePath="/feed" />
            <div className="feedback-page__content">
              <FeedbackForm backTo="/feed" backLabel="Quay lại trang chủ" />
            </div>
          </div>
        </main>
        <AppFooter />
      </div>
    )
  }

  return (
    <div className="feedback-page">
      <AppHeader activeNav="community" />
      <main className="feedback-page__main">
        <FeedbackForm backTo="/community" backLabel="Quay lại cộng đồng" />
      </main>
      <AppFooter />
    </div>
  )
}

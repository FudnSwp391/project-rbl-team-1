import AppHeaderLoggedIn from '@/shared/layouts/AppHeaderLoggedIn'
import AppFooter from '@/shared/layouts/AppFooter'
import CommunitySidebar from '@/features/community/components/CommunitySidebar'
import CreatePostForm from '../components/CreatePostForm'
import '@/shared/layouts/AppHeaderLoggedIn/app-header-logged-in.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '@/features/community/community.css'
import '../create-post.css'

export default function CreatePostPage() {
  return (
    <div className="create-post-page">
      <AppHeaderLoggedIn />
      <main className="logged-in-page__main">
        <div className="logged-in-page__layout">
          <CommunitySidebar activeMain="home" homePath="/feed" />
          <div className="create-post-page__content">
            <CreatePostForm />
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  )
}

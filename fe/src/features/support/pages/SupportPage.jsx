import AppHeader from '@/shared/layouts/AppHeader'
import AppFooter from '@/shared/layouts/AppFooter'
import SupportHero from '../components/SupportHero'
import SupportCategories from '../components/SupportCategories'
import SupportFaq from '../components/SupportFaq'
import SupportContact from '../components/SupportContact'
import SupportCta from '../components/SupportCta'
import '@/shared/layouts/AppHeader/app-header.css'
import '@/shared/layouts/AppFooter/app-footer.css'
import '../support.css'

export default function SupportPage() {
  return (
    <div className="support-page">
      <AppHeader activeNav="support" />
      <main className="support-page__main">
        <SupportHero />
        <SupportCategories />
        <SupportFaq />
        <div id="contact">
          <SupportContact />
        </div>
        <SupportCta />
      </main>
      <AppFooter />
    </div>
  )
}

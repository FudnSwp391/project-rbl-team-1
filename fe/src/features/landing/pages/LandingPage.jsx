import LandingHeader from '../components/LandingHeader'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import StatsSection from '../components/StatsSection'
import PremiumBanner from '../components/PremiumBanner'
import AppFooter from '@/shared/layouts/AppFooter'
import '@/shared/layouts/AppFooter/app-footer.css'
import '../landing.css'

export default function LandingPage() {
  return (
    <div className="landing">
      <LandingHeader />
      <main className="landing__main">
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <PremiumBanner />
      </main>
      <AppFooter />
    </div>
  )
}

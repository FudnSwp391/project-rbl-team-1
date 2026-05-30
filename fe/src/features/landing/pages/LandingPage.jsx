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
      <div className="landing__ambient" aria-hidden="true">
        <div className="landing__ambient-blob landing__ambient-blob--1" />
        <div className="landing__ambient-blob landing__ambient-blob--2" />
        <div className="landing__ambient-blob landing__ambient-blob--3" />
        <div className="landing__ambient-grid" />
      </div>

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

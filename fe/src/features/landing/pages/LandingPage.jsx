import LandingHeader from '../components/LandingHeader'
import HeroSection from '../components/HeroSection'
import FeaturesSection from '../components/FeaturesSection'
import StatsSection from '../components/StatsSection'
import PremiumBanner from '../components/PremiumBanner'
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
    </div>
  )
}

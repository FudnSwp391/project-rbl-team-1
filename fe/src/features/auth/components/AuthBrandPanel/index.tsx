import mascot from '@/assets/illustrations/ai-mascot.png'
import LoginFeatureCard from '@/features/auth/components/LoginFeatureCard'
import { AUTH_BRAND, LOGIN_FEATURES } from '@/features/auth/types'

interface AuthBrandPanelProps {
  titleLines: readonly string[]
}

export default function AuthBrandPanel({ titleLines }: AuthBrandPanelProps) {
  return (
    <section className="login-brand-panel" aria-label="SEHub brand">
      <div className="login-brand-panel__glow login-brand-panel__glow--top" aria-hidden="true" />
      <div className="login-brand-panel__glow login-brand-panel__glow--bottom" aria-hidden="true" />

      <div className="login-brand-panel__logo">
        <div className="login-brand-panel__logo-mark">
          <img src={mascot} alt="" className="login-brand-panel__logo-image" />
        </div>
        <span className="login-brand-panel__logo-text">{AUTH_BRAND.BRAND}</span>
      </div>

      <div className="login-brand-panel__intro">
        <h1 className="login-brand-panel__title">
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <span className="login-brand-panel__accent" aria-hidden="true" />
        <p className="login-brand-panel__description">{AUTH_BRAND.DESCRIPTION}</p>
      </div>

      <div className="login-brand-panel__features">
        {LOGIN_FEATURES.map((feature) => (
          <LoginFeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  )
}

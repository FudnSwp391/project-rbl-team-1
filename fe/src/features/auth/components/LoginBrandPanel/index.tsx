import mascot from '@/assets/illustrations/ai-mascot.png'
import LoginFeatureCard from '@/features/auth/components/LoginFeatureCard'
import { LOGIN_FEATURES, LOGIN_STRINGS } from '@/features/auth/types'

export default function LoginBrandPanel() {
  return (
    <section className="login-brand-panel" aria-label="SEHub brand">
      <div className="login-brand-panel__glow login-brand-panel__glow--top" aria-hidden="true" />
      <div className="login-brand-panel__glow login-brand-panel__glow--bottom" aria-hidden="true" />

      <div className="login-brand-panel__logo">
        <div className="login-brand-panel__logo-mark">
          <img src={mascot} alt="" className="login-brand-panel__logo-image" />
        </div>
        <span className="login-brand-panel__logo-text">{LOGIN_STRINGS.BRAND}</span>
      </div>

      <div className="login-brand-panel__intro">
        <h1 className="login-brand-panel__title">
          {LOGIN_STRINGS.WELCOME_TITLE.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <span className="login-brand-panel__accent" aria-hidden="true" />
        <p className="login-brand-panel__description">{LOGIN_STRINGS.WELCOME_DESCRIPTION}</p>
      </div>

      <div className="login-brand-panel__features">
        {LOGIN_FEATURES.map((feature) => (
          <LoginFeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  )
}

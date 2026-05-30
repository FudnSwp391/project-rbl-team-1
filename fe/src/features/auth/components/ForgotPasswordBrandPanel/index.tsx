import mascot from '@/assets/illustrations/ai-mascot.png'
import ForgotPasswordFeatureCard from '@/features/auth/components/ForgotPasswordFeatureCard'
import {
  AUTH_BRAND,
  FORGOT_PASSWORD_FEATURES,
  FORGOT_PASSWORD_STRINGS,
} from '@/features/auth/types'

export default function ForgotPasswordBrandPanel() {
  return (
    <section className="forgot-password-brand-panel" aria-label="SEHub password recovery">
      <div
        className="forgot-password-brand-panel__glow forgot-password-brand-panel__glow--top"
        aria-hidden="true"
      />
      <div
        className="forgot-password-brand-panel__glow forgot-password-brand-panel__glow--bottom"
        aria-hidden="true"
      />

      <div className="forgot-password-brand-panel__body">
        <div className="forgot-password-brand-panel__logo">
          <div className="forgot-password-brand-panel__logo-mark">
            <img src={mascot} alt="" className="forgot-password-brand-panel__logo-image" />
          </div>
          <span className="forgot-password-brand-panel__logo-text">{AUTH_BRAND.BRAND}</span>
        </div>

        <div className="forgot-password-brand-panel__intro">
          <h1 className="forgot-password-brand-panel__title">
            {FORGOT_PASSWORD_STRINGS.BRAND_TITLE.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <span className="forgot-password-brand-panel__accent" aria-hidden="true" />
        </div>

        <div className="forgot-password-brand-panel__features">
          {FORGOT_PASSWORD_FEATURES.map((feature) => (
            <ForgotPasswordFeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>

      <p className="forgot-password-brand-panel__footer">{FORGOT_PASSWORD_STRINGS.BRAND_FOOTER}</p>
    </section>
  )
}

import type { LoginFeature } from '@/features/auth/types'
import LoginFeatureIcon from '@/features/auth/components/LoginFeatureIcon'

interface LoginFeatureCardProps {
  feature: LoginFeature
}

export default function LoginFeatureCard({ feature }: LoginFeatureCardProps) {
  return (
    <article className="login-feature-card">
      <div className="login-feature-card__icon">
        <LoginFeatureIcon icon={feature.icon} />
      </div>
      <div className="login-feature-card__content">
        <h3 className="login-feature-card__title">{feature.title}</h3>
        <p className="login-feature-card__description">{feature.description}</p>
      </div>
    </article>
  )
}

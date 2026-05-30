import type { ForgotPasswordFeature } from '@/features/auth/types'
import { ShieldIcon, SupportIcon } from '@/features/auth/components/ForgotPasswordIcons'

interface ForgotPasswordFeatureCardProps {
  feature: ForgotPasswordFeature
}

function FeatureIcon({ icon }: { icon: ForgotPasswordFeature['icon'] }) {
  if (icon === 'shield') return <ShieldIcon />
  return <SupportIcon />
}

export default function ForgotPasswordFeatureCard({ feature }: ForgotPasswordFeatureCardProps) {
  return (
    <article className="forgot-password-feature-card">
      <div className="forgot-password-feature-card__icon">
        <FeatureIcon icon={feature.icon} />
      </div>
      <div className="forgot-password-feature-card__content">
        <h3 className="forgot-password-feature-card__title">{feature.title}</h3>
        <p className="forgot-password-feature-card__description">{feature.description}</p>
      </div>
    </article>
  )
}

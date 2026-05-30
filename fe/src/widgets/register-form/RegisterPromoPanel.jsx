import { Link } from 'react-router-dom'
import logo from '@/assets/logos/sehub-logo.png'
import mascot from '@/assets/illustrations/ai-mascot.png'
import { REGISTER_COPY } from '@/features/auth/model/register.constants'

export default function RegisterPromoPanel() {
  return (
    <aside className="register-promo" aria-label="Giới thiệu SEHub">
      <div className="register-promo__content">
        <Link to="/" className="register-promo__brand">
          <img src={logo} alt="" className="register-promo__logo" />
          <span>SEHub</span>
        </Link>

        <div className="register-promo__body">
          <h2>{REGISTER_COPY.promoTitle}</h2>
          <p>{REGISTER_COPY.promoDescription}</p>
        </div>

        <img src={mascot} alt="" className="register-promo__mascot" aria-hidden="true" />
      </div>
    </aside>
  )
}

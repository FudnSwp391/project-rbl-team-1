import { Link } from 'react-router-dom'
import SuccessState from '@/shared/components/SuccessState'
import { ArrowRightIcon } from '@/features/auth/components/ForgotPasswordIcons'
import { useForgotPasswordSuccessNavigation } from '@/features/auth/hooks'
import {
  FORGOT_PASSWORD_STRINGS,
  FORGOT_PASSWORD_SUCCESS_STRINGS,
} from '@/features/auth/types'

export default function ForgotPasswordSuccessPanel() {
  const { goToLogin } = useForgotPasswordSuccessNavigation()

  return (
    <section className="forgot-password-success-panel" aria-label="Password recovery success">
      <div className="forgot-password-success-panel__content">
        <SuccessState
          title={FORGOT_PASSWORD_SUCCESS_STRINGS.TITLE}
          description={<p>{FORGOT_PASSWORD_SUCCESS_STRINGS.DESCRIPTION}</p>}
          action={
            <button
              type="button"
              className="forgot-password-success-panel__submit"
              onClick={goToLogin}
            >
              <span>{FORGOT_PASSWORD_SUCCESS_STRINGS.SUBMIT}</span>
              <ArrowRightIcon />
            </button>
          }
        />

        <div className="forgot-password-success-panel__assistance">
          <p>
            <span>{FORGOT_PASSWORD_SUCCESS_STRINGS.ASSISTANCE_PREFIX} </span>
            <Link to="/support">{FORGOT_PASSWORD_SUCCESS_STRINGS.ASSISTANCE_LINK}</Link>
          </p>
        </div>

        <p className="forgot-password-success-panel__footer">{FORGOT_PASSWORD_STRINGS.FORM_FOOTER}</p>
      </div>
    </section>
  )
}

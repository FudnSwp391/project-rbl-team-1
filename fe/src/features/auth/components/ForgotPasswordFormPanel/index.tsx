import { Link } from 'react-router-dom'
import SelectionCard from '@/shared/components/SelectionCard'
import {
  EmailMethodIcon,
  PhoneMethodIcon,
} from '@/features/auth/components/ForgotPasswordIcons'
import { useForgotPassword } from '@/features/auth/hooks'
import { useForgotPasswordStore } from '@/features/auth/stores'
import { FORGOT_PASSWORD_STRINGS } from '@/features/auth/types'

export default function ForgotPasswordFormPanel() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const setSelectedMethod = useForgotPasswordStore((state) => state.setSelectedMethod)
  const { mutate, isPending, isError } = useForgotPassword()

  const handleContinue = () => {
    if (!selectedMethod) return
    mutate({ method: selectedMethod })
  }

  return (
    <section className="forgot-password-form-panel" aria-label="Password recovery method">
      <div className="forgot-password-form-panel__content">
        <header className="forgot-password-form-panel__header">
          <h1 className="forgot-password-form-panel__title">{FORGOT_PASSWORD_STRINGS.FORM_TITLE}</h1>
          <p className="forgot-password-form-panel__subtitle">
            {FORGOT_PASSWORD_STRINGS.FORM_SUBTITLE}
          </p>
        </header>

        <div className="forgot-password-form-panel__methods">
          <SelectionCard
            title={FORGOT_PASSWORD_STRINGS.EMAIL_METHOD_TITLE}
            description={FORGOT_PASSWORD_STRINGS.EMAIL_METHOD_DESCRIPTION}
            icon={<EmailMethodIcon />}
            selected={selectedMethod === 'email'}
            onSelect={() => setSelectedMethod('email')}
          />
          <SelectionCard
            title={FORGOT_PASSWORD_STRINGS.PHONE_METHOD_TITLE}
            description={FORGOT_PASSWORD_STRINGS.PHONE_METHOD_DESCRIPTION}
            icon={<PhoneMethodIcon />}
            selected={selectedMethod === 'phone'}
            onSelect={() => setSelectedMethod('phone')}
          />
        </div>

        {isError ? (
          <p className="forgot-password-form-panel__error" role="alert">
            {FORGOT_PASSWORD_STRINGS.ERROR_GENERIC}
          </p>
        ) : null}

        <button
          type="button"
          className="forgot-password-form-panel__submit"
          disabled={!selectedMethod || isPending}
          onClick={handleContinue}
        >
          {FORGOT_PASSWORD_STRINGS.SUBMIT}
        </button>

        <p className="forgot-password-form-panel__back">
          <Link to="/login">{FORGOT_PASSWORD_STRINGS.BACK_TO_LOGIN}</Link>
        </p>

        <p className="forgot-password-form-panel__footer">{FORGOT_PASSWORD_STRINGS.FORM_FOOTER}</p>
      </div>
    </section>
  )
}

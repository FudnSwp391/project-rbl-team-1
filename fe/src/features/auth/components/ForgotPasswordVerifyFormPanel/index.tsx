import { Link } from 'react-router-dom'
import InputField from '@/shared/components/InputField'
import { EmailIcon } from '@/features/auth/components/LoginIcons'
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  PhoneMethodIcon,
} from '@/features/auth/components/ForgotPasswordIcons'
import { useForgotPasswordVerify, useForgotPasswordVerifyForm } from '@/features/auth/hooks'
import { useForgotPasswordStore } from '@/features/auth/stores'
import {
  FORGOT_PASSWORD_STRINGS,
  FORGOT_PASSWORD_VERIFY_STRINGS,
} from '@/features/auth/types'

export default function ForgotPasswordVerifyFormPanel() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForgotPasswordVerifyForm()
  const { mutate, isPending, isError } = useForgotPasswordVerify()

  const isEmailMethod = selectedMethod === 'email'
  const title = isEmailMethod
    ? FORGOT_PASSWORD_VERIFY_STRINGS.EMAIL_TITLE
    : FORGOT_PASSWORD_VERIFY_STRINGS.PHONE_TITLE
  const subtitle = isEmailMethod
    ? FORGOT_PASSWORD_VERIFY_STRINGS.EMAIL_SUBTITLE
    : FORGOT_PASSWORD_VERIFY_STRINGS.PHONE_SUBTITLE
  const label = isEmailMethod
    ? FORGOT_PASSWORD_VERIFY_STRINGS.EMAIL_LABEL
    : FORGOT_PASSWORD_VERIFY_STRINGS.PHONE_LABEL
  const placeholder = isEmailMethod
    ? FORGOT_PASSWORD_VERIFY_STRINGS.EMAIL_PLACEHOLDER
    : FORGOT_PASSWORD_VERIFY_STRINGS.PHONE_PLACEHOLDER

  return (
    <section className="forgot-password-verify-panel" aria-label="Password recovery verification">
      <div className="forgot-password-verify-panel__content">
        <header className="forgot-password-verify-panel__header">
          <h1 className="forgot-password-verify-panel__title">{title}</h1>
          <p className="forgot-password-verify-panel__subtitle">{subtitle}</p>
        </header>

        <form
          className="forgot-password-verify-panel__form"
          onSubmit={handleSubmit((values) => mutate(values))}
          noValidate
        >
          <InputField
            label={label}
            type={isEmailMethod ? 'email' : 'tel'}
            autoComplete={isEmailMethod ? 'email' : 'tel'}
            placeholder={placeholder}
            prefixIcon={
              isEmailMethod ? (
                <EmailIcon />
              ) : (
                <span className="forgot-password-verify-panel__phone-icon">
                  <PhoneMethodIcon />
                </span>
              )
            }
            error={errors.contact?.message}
            {...register('contact')}
          />

          {isError ? (
            <p className="forgot-password-verify-panel__error" role="alert">
              {FORGOT_PASSWORD_VERIFY_STRINGS.ERROR_GENERIC}
            </p>
          ) : null}

          <button type="submit" className="forgot-password-verify-panel__submit" disabled={isPending}>
            <span>{FORGOT_PASSWORD_VERIFY_STRINGS.SUBMIT}</span>
            <ArrowRightIcon />
          </button>
        </form>

        <p className="forgot-password-verify-panel__change-method">
          <Link to="/forgot-password">
            <ChevronLeftIcon />
            <span>{FORGOT_PASSWORD_VERIFY_STRINGS.CHANGE_METHOD}</span>
          </Link>
        </p>

        <div className="forgot-password-verify-panel__assistance">
          <p>
            <span>{FORGOT_PASSWORD_VERIFY_STRINGS.ASSISTANCE_PREFIX} </span>
            <Link to="/support">{FORGOT_PASSWORD_VERIFY_STRINGS.ASSISTANCE_LINK}</Link>
          </p>
        </div>

        <p className="forgot-password-verify-panel__footer">{FORGOT_PASSWORD_STRINGS.FORM_FOOTER}</p>
      </div>
    </section>
  )
}

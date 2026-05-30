import { Link } from 'react-router-dom'
import InputField from '@/shared/components/InputField'
import { EyeIcon, KeyIcon, LockIcon } from '@/features/auth/components/LoginIcons'
import { ArrowRightIcon } from '@/features/auth/components/ForgotPasswordIcons'
import { useForgotPasswordReset, useForgotPasswordResetForm } from '@/features/auth/hooks'
import { useForgotPasswordResetStore } from '@/features/auth/stores'
import {
  AUTH_BRAND,
  FORGOT_PASSWORD_RESET_STRINGS,
  FORGOT_PASSWORD_STRINGS,
} from '@/features/auth/types'

export default function ForgotPasswordResetFormPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForgotPasswordResetForm()
  const { mutate, isPending, isError } = useForgotPasswordReset()
  const showPassword = useForgotPasswordResetStore((state) => state.showPassword)
  const showConfirmPassword = useForgotPasswordResetStore((state) => state.showConfirmPassword)
  const togglePasswordVisibility = useForgotPasswordResetStore((state) => state.togglePasswordVisibility)
  const toggleConfirmPasswordVisibility = useForgotPasswordResetStore(
    (state) => state.toggleConfirmPasswordVisibility,
  )

  return (
    <section className="forgot-password-reset-panel" aria-label="Password reset form">
      <div className="forgot-password-reset-panel__content">
        <header className="forgot-password-reset-panel__header">
          <h1 className="forgot-password-reset-panel__title">
            {FORGOT_PASSWORD_RESET_STRINGS.TITLE}
          </h1>
          <p className="forgot-password-reset-panel__subtitle">
            {FORGOT_PASSWORD_RESET_STRINGS.SUBTITLE}
          </p>
        </header>

        <form
          className="forgot-password-reset-panel__form"
          onSubmit={handleSubmit((values) => mutate(values))}
          noValidate
        >
          <InputField
            label={FORGOT_PASSWORD_RESET_STRINGS.PASSWORD_LABEL}
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder={FORGOT_PASSWORD_RESET_STRINGS.PASSWORD_PLACEHOLDER}
            prefixIcon={<LockIcon />}
            error={errors.password?.message}
            suffixAction={
              <button
                type="button"
                className="forgot-password-reset-panel__toggle-password"
                onClick={togglePasswordVisibility}
                aria-label={AUTH_BRAND.TOGGLE_PASSWORD}
              >
                <EyeIcon hidden={!showPassword} />
              </button>
            }
            {...register('password')}
          />

          <InputField
            label={FORGOT_PASSWORD_RESET_STRINGS.CONFIRM_PASSWORD_LABEL}
            type={showConfirmPassword ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder={FORGOT_PASSWORD_RESET_STRINGS.CONFIRM_PASSWORD_PLACEHOLDER}
            prefixIcon={<KeyIcon />}
            error={errors.confirmPassword?.message}
            suffixAction={
              <button
                type="button"
                className="forgot-password-reset-panel__toggle-password"
                onClick={toggleConfirmPasswordVisibility}
                aria-label={AUTH_BRAND.TOGGLE_PASSWORD}
              >
                <EyeIcon hidden={!showConfirmPassword} />
              </button>
            }
            {...register('confirmPassword')}
          />

          <p className="forgot-password-reset-panel__hint">
            {FORGOT_PASSWORD_RESET_STRINGS.REQUIREMENTS}
          </p>

          {isError ? (
            <p className="forgot-password-reset-panel__error" role="alert">
              {FORGOT_PASSWORD_RESET_STRINGS.ERROR_GENERIC}
            </p>
          ) : null}

          <button type="submit" className="forgot-password-reset-panel__submit" disabled={isPending}>
            <span>{FORGOT_PASSWORD_RESET_STRINGS.SUBMIT}</span>
            <ArrowRightIcon />
          </button>
        </form>

        <p className="forgot-password-reset-panel__back">
          <Link to="/login">{FORGOT_PASSWORD_RESET_STRINGS.BACK_TO_LOGIN}</Link>
        </p>

        <div className="forgot-password-reset-panel__assistance">
          <p>
            <span>{FORGOT_PASSWORD_RESET_STRINGS.ASSISTANCE_PREFIX} </span>
            <Link to="/support">{FORGOT_PASSWORD_RESET_STRINGS.ASSISTANCE_LINK}</Link>
          </p>
        </div>

        <p className="forgot-password-reset-panel__footer">{FORGOT_PASSWORD_STRINGS.FORM_FOOTER}</p>
      </div>
    </section>
  )
}

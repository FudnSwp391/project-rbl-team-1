import { Link } from 'react-router-dom'
import { Controller } from 'react-hook-form'
import OtpInput from '@/shared/components/OtpInput'
import { ArrowRightIcon } from '@/features/auth/components/ForgotPasswordIcons'
import {
  useForgotPasswordOtp,
  useForgotPasswordOtpForm,
  useForgotPasswordResend,
  useForgotPasswordResendCountdown,
} from '@/features/auth/hooks'
import { useForgotPasswordStore } from '@/features/auth/stores'
import { maskContact } from '@/features/auth/utils/formatCountdown'
import {
  FORGOT_PASSWORD_OTP_STRINGS,
  FORGOT_PASSWORD_STRINGS,
} from '@/features/auth/types'

export default function ForgotPasswordOtpFormPanel() {
  const selectedMethod = useForgotPasswordStore((state) => state.selectedMethod)
  const contact = useForgotPasswordStore((state) => state.contact)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForgotPasswordOtpForm()
  const { mutate, isPending, isError } = useForgotPasswordOtp()
  const { mutate: resendCode, isPending: isResending, isError: isResendError } =
    useForgotPasswordResend()
  const { canResend, formattedCountdown } = useForgotPasswordResendCountdown()

  const isEmailMethod = selectedMethod === 'email'
  const maskedContact = contact && selectedMethod ? maskContact(contact, selectedMethod) : ''
  const subtitlePrefix = isEmailMethod
    ? FORGOT_PASSWORD_OTP_STRINGS.EMAIL_SUBTITLE_PREFIX
    : FORGOT_PASSWORD_OTP_STRINGS.PHONE_SUBTITLE_PREFIX
  const changeContactLabel = isEmailMethod
    ? FORGOT_PASSWORD_OTP_STRINGS.CHANGE_EMAIL
    : FORGOT_PASSWORD_OTP_STRINGS.CHANGE_PHONE

  const handleResend = () => {
    if (!canResend || isResending) return
    resendCode()
  }

  return (
    <section className="forgot-password-otp-panel" aria-label="Password recovery OTP">
      <div className="forgot-password-otp-panel__content">
        <header className="forgot-password-otp-panel__header">
          <h1 className="forgot-password-otp-panel__title">{FORGOT_PASSWORD_OTP_STRINGS.TITLE}</h1>
          <p className="forgot-password-otp-panel__subtitle">
            {subtitlePrefix}{' '}
            <strong className="forgot-password-otp-panel__contact">{maskedContact}</strong>
          </p>
        </header>

        <form
          className="forgot-password-otp-panel__form"
          onSubmit={handleSubmit((values) => mutate(values))}
          noValidate
        >
          <div className="forgot-password-otp-panel__field">
            <label className="forgot-password-otp-panel__label" htmlFor="otp-input">
              {FORGOT_PASSWORD_OTP_STRINGS.OTP_LABEL}
            </label>
            <Controller
              name="otp"
              control={control}
              render={({ field }) => (
                <OtpInput
                  id="otp-input"
                  value={field.value}
                  onChange={field.onChange}
                  disabled={isPending}
                  error={Boolean(errors.otp)}
                />
              )}
            />
            {errors.otp?.message ? (
              <p className="forgot-password-otp-panel__error" role="alert">
                {errors.otp.message}
              </p>
            ) : null}
          </div>

          {isError ? (
            <p className="forgot-password-otp-panel__error" role="alert">
              {FORGOT_PASSWORD_OTP_STRINGS.ERROR_GENERIC}
            </p>
          ) : null}

          <button type="submit" className="forgot-password-otp-panel__submit" disabled={isPending}>
            <span>{FORGOT_PASSWORD_OTP_STRINGS.SUBMIT}</span>
            <ArrowRightIcon />
          </button>
        </form>

        <div className="forgot-password-otp-panel__resend">
          <p>
            <span>{FORGOT_PASSWORD_OTP_STRINGS.RESEND_PREFIX} </span>
            {canResend ? (
              <button
                type="button"
                className="forgot-password-otp-panel__resend-action"
                onClick={handleResend}
                disabled={isResending}
              >
                {FORGOT_PASSWORD_OTP_STRINGS.RESEND_ACTION}
              </button>
            ) : (
              <span className="forgot-password-otp-panel__resend-countdown">
                {FORGOT_PASSWORD_OTP_STRINGS.RESEND_COUNTDOWN} {formattedCountdown}
              </span>
            )}
          </p>
          {isResendError ? (
            <p className="forgot-password-otp-panel__error" role="alert">
              {FORGOT_PASSWORD_OTP_STRINGS.RESEND_ERROR}
            </p>
          ) : null}
        </div>

        <p className="forgot-password-otp-panel__change-contact">
          <Link to="/forgot-password/verify">{changeContactLabel}</Link>
        </p>

        <div className="forgot-password-otp-panel__assistance">
          <p>
            <span>{FORGOT_PASSWORD_OTP_STRINGS.ASSISTANCE_PREFIX} </span>
            <Link to="/support">{FORGOT_PASSWORD_OTP_STRINGS.ASSISTANCE_LINK}</Link>
          </p>
        </div>

        <p className="forgot-password-otp-panel__footer">{FORGOT_PASSWORD_STRINGS.FORM_FOOTER}</p>
      </div>
    </section>
  )
}

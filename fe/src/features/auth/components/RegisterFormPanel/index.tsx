import { Link } from 'react-router-dom'
import Divider from '@/shared/components/Divider'
import InputField from '@/shared/components/InputField'
import {
  EmailIcon,
  EyeIcon,
  GoogleIcon,
  KeyIcon,
  LockIcon,
  UserIcon,
} from '@/features/auth/components/LoginIcons'
import { useRegister, useRegisterForm } from '@/features/auth/hooks'
import { useRegisterStore } from '@/features/auth/stores'
import { AUTH_BRAND, REGISTER_STRINGS } from '@/features/auth/types'

export default function RegisterFormPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm()
  const { mutate, isPending, isError } = useRegister()
  const showPassword = useRegisterStore((state) => state.showPassword)
  const showConfirmPassword = useRegisterStore((state) => state.showConfirmPassword)
  const togglePasswordVisibility = useRegisterStore((state) => state.togglePasswordVisibility)
  const toggleConfirmPasswordVisibility = useRegisterStore(
    (state) => state.toggleConfirmPasswordVisibility,
  )

  return (
    <section className="login-form-panel" aria-label="Registration form">
      <div className="login-form-panel__content">
        <header className="login-form-panel__header">
          <h1 className="login-form-panel__title">{REGISTER_STRINGS.FORM_TITLE}</h1>
          <p className="login-form-panel__subtitle">{REGISTER_STRINGS.FORM_SUBTITLE}</p>
        </header>

        <form
          className="login-form-panel__form"
          onSubmit={handleSubmit((values) => mutate(values))}
          noValidate
        >
          <InputField
            label={REGISTER_STRINGS.FULL_NAME_LABEL}
            type="text"
            autoComplete="name"
            placeholder={REGISTER_STRINGS.FULL_NAME_PLACEHOLDER}
            prefixIcon={<UserIcon />}
            error={errors.fullName?.message}
            {...register('fullName')}
          />

          <InputField
            label={REGISTER_STRINGS.EMAIL_LABEL}
            type="email"
            autoComplete="email"
            placeholder={REGISTER_STRINGS.EMAIL_PLACEHOLDER}
            prefixIcon={<EmailIcon />}
            error={errors.email?.message}
            {...register('email')}
          />

          <InputField
            label={REGISTER_STRINGS.PASSWORD_LABEL}
            type={showPassword ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder={REGISTER_STRINGS.PASSWORD_PLACEHOLDER}
            prefixIcon={<LockIcon />}
            error={errors.password?.message}
            suffixAction={
              <button
                type="button"
                className="login-form-panel__toggle-password"
                onClick={togglePasswordVisibility}
                aria-label={AUTH_BRAND.TOGGLE_PASSWORD}
              >
                <EyeIcon hidden={!showPassword} />
              </button>
            }
            {...register('password')}
          />

          <InputField
            label={REGISTER_STRINGS.CONFIRM_PASSWORD_LABEL}
            type={showConfirmPassword ? 'text' : 'password'}
            autoComplete="new-password"
            placeholder={REGISTER_STRINGS.CONFIRM_PASSWORD_PLACEHOLDER}
            prefixIcon={<KeyIcon />}
            error={errors.confirmPassword?.message}
            suffixAction={
              <button
                type="button"
                className="login-form-panel__toggle-password"
                onClick={toggleConfirmPasswordVisibility}
                aria-label={AUTH_BRAND.TOGGLE_PASSWORD}
              >
                <EyeIcon hidden={!showConfirmPassword} />
              </button>
            }
            {...register('confirmPassword')}
          />

          {isError ? (
            <p className="login-form-panel__error" role="alert">
              {REGISTER_STRINGS.ERROR_GENERIC}
            </p>
          ) : null}

          <button type="submit" className="login-form-panel__submit" disabled={isPending}>
            {REGISTER_STRINGS.SUBMIT}
          </button>

          <Divider label={AUTH_BRAND.DIVIDER} />

          <button type="button" className="login-form-panel__google">
            <GoogleIcon />
            <span>{AUTH_BRAND.GOOGLE}</span>
          </button>

          <p className="login-form-panel__register">
            <span>{REGISTER_STRINGS.HAS_ACCOUNT} </span>
            <Link to="/login">{REGISTER_STRINGS.LOGIN}</Link>
          </p>
        </form>

        <p className="login-form-panel__tagline">{AUTH_BRAND.TAGLINE}</p>
      </div>
    </section>
  )
}

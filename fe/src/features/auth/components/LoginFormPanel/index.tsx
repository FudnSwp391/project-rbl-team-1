import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Checkbox from '@/shared/components/Checkbox'
import Divider from '@/shared/components/Divider'
import InputField from '@/shared/components/InputField'
import { EmailIcon, EyeIcon, GoogleIcon, LockIcon } from '@/features/auth/components/LoginIcons'
import { useLogin, useLoginForm } from '@/features/auth/hooks'
import { getRememberedEmail } from '@/features/auth/services'
import { useLoginStore } from '@/features/auth/stores'
import { AUTH_BRAND, LOGIN_STRINGS } from '@/features/auth/types'

export default function LoginFormPanel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()
  const { mutate, isPending, isError } = useLogin()
  const rememberMe = useLoginStore((state) => state.rememberMe)
  const showPassword = useLoginStore((state) => state.showPassword)
  const setRememberMe = useLoginStore((state) => state.setRememberMe)
  const togglePasswordVisibility = useLoginStore((state) => state.togglePasswordVisibility)

  useEffect(() => {
    if (getRememberedEmail()) setRememberMe(true)
  }, [setRememberMe])

  return (
    <section className="login-form-panel" aria-label="Login form">
      <div className="login-form-panel__content">
        <header className="login-form-panel__header">
          <h1 className="login-form-panel__title">{LOGIN_STRINGS.FORM_TITLE}</h1>
          <p className="login-form-panel__subtitle">{LOGIN_STRINGS.FORM_SUBTITLE}</p>
        </header>

        <form
          className="login-form-panel__form"
          onSubmit={handleSubmit((values) => mutate(values))}
          noValidate
        >
          <InputField
            label={LOGIN_STRINGS.EMAIL_LABEL}
            type="email"
            autoComplete="email"
            placeholder={LOGIN_STRINGS.EMAIL_PLACEHOLDER}
            prefixIcon={<EmailIcon />}
            error={errors.email?.message}
            {...register('email')}
          />

          <InputField
            label={LOGIN_STRINGS.PASSWORD_LABEL}
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            placeholder={LOGIN_STRINGS.PASSWORD_PLACEHOLDER}
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

          <div className="login-form-panel__meta">
            <Checkbox
              label={LOGIN_STRINGS.REMEMBER_ME}
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
            />
            <Link to="/forgot-password" className="login-form-panel__forgot-link">
              {LOGIN_STRINGS.FORGOT_PASSWORD}
            </Link>
          </div>

          {isError ? (
            <p className="login-form-panel__error" role="alert">
              {LOGIN_STRINGS.ERROR_GENERIC}
            </p>
          ) : null}

          <button type="submit" className="login-form-panel__submit" disabled={isPending}>
            {LOGIN_STRINGS.SUBMIT}
          </button>

          <Divider label={AUTH_BRAND.DIVIDER} />

          <button type="button" className="login-form-panel__google">
            <GoogleIcon />
            <span>{AUTH_BRAND.GOOGLE}</span>
          </button>

          <p className="login-form-panel__register">
            <span>{LOGIN_STRINGS.NO_ACCOUNT} </span>
            <Link to="/register">{LOGIN_STRINGS.REGISTER}</Link>
          </p>
        </form>

        <p className="login-form-panel__tagline">{AUTH_BRAND.TAGLINE}</p>
      </div>
    </section>
  )
}

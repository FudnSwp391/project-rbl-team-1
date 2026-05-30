import AppHeader from '@/shared/layouts/AppHeader'
import { useRegisterFlow } from '@/features/auth/hooks'
import {
  OtpVerifyWidget,
  RegisterFormWidget,
  RegisterPromoPanel,
  RegisterSuccessWidget,
} from '@/widgets/register-form'
import '@/shared/layouts/AppHeader/app-header.css'
import '@/widgets/register-form/register-form.css'
import './register-page.css'

export default function RegisterPage() {
  const {
    step,
    form,
    otpForm,
    formErrors,
    otpErrors,
    registeredEmail,
    loading,
    error,
    updateField,
    updateOtp,
    handleRegisterSubmit,
    handleOtpSubmit,
    goToLogin,
  } = useRegisterFlow()

  return (
    <div className="register-page">
      <AppHeader activeNav="community" />
      <main className="register-page__main">
        <RegisterPromoPanel />

        <section className="register-page__panel">
          {step === 'form' && (
            <RegisterFormWidget
              form={form}
              errors={formErrors}
              loading={loading}
              apiError={error}
              onFieldChange={updateField}
              onSubmit={handleRegisterSubmit}
            />
          )}

          {step === 'otp' && (
            <OtpVerifyWidget
              email={registeredEmail}
              otp={otpForm.otp}
              errors={otpErrors}
              loading={loading}
              apiError={error}
              onOtpChange={updateOtp}
              onSubmit={handleOtpSubmit}
              onBackToLogin={goToLogin}
            />
          )}

          {step === 'success' && <RegisterSuccessWidget onGoToLogin={goToLogin} />}
        </section>
      </main>
    </div>
  )
}

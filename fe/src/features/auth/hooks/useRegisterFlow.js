import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, verifyOtp } from '@/features/auth/authThunk'
import {
  OTP_INITIAL_VALUES,
  REGISTER_INITIAL_VALUES,
} from '@/features/auth/model/register.constants'
import {
  toRegisterPayload,
  validateOtpForm,
  validateRegisterForm,
} from '@/features/auth/model/validateRegister'

export default function useRegisterFlow() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state) => state.auth)

  const [step, setStep] = useState('form')
  const [form, setForm] = useState(REGISTER_INITIAL_VALUES)
  const [otpForm, setOtpForm] = useState(OTP_INITIAL_VALUES)
  const [formErrors, setFormErrors] = useState({})
  const [otpErrors, setOtpErrors] = useState({})
  const [registeredEmail, setRegisteredEmail] = useState('')

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setFormErrors((current) => ({ ...current, [field]: undefined }))
  }

  const updateOtp = (value) => {
    setOtpForm({ otp: value })
    setOtpErrors({})
  }

  const handleRegisterSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateRegisterForm(form)
    setFormErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const payload = toRegisterPayload(form)
    const result = await dispatch(register(payload))

    if (register.fulfilled.match(result)) {
      setRegisteredEmail(payload.email)
      setStep('otp')
    }
  }

  const handleOtpSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateOtpForm(otpForm)
    setOtpErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const result = await dispatch(
      verifyOtp({
        email: registeredEmail,
        otp: otpForm.otp.trim(),
      }),
    )

    if (verifyOtp.fulfilled.match(result)) {
      setStep('success')
    }
  }

  const goToLogin = () => navigate('/login')

  return {
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
  }
}

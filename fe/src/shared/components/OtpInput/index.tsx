import { useCallback, useEffect, useRef, type ClipboardEvent, type KeyboardEvent } from 'react'
import './otp-input.css'

interface OtpInputProps {
  length?: number
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  error?: boolean
  id?: string
}

export default function OtpInput({
  length = 6,
  value,
  onChange,
  disabled = false,
  error = false,
  id = 'otp-input',
}: OtpInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  const digits = Array.from({ length }, (_, index) => value[index] ?? '')

  const focusInput = (index: number) => {
    const target = inputRefs.current[index]
    if (target) {
      target.focus()
      target.select()
    }
  }

  const updateValue = useCallback(
    (nextDigits: string[]) => {
      onChange(nextDigits.join('').slice(0, length))
    },
    [length, onChange],
  )

  const handleChange = (index: number, nextChar: string) => {
    const sanitized = nextChar.replace(/\D/g, '').slice(-1)
    const nextDigits = [...digits]
    nextDigits[index] = sanitized
    updateValue(nextDigits)

    if (sanitized && index < length - 1) {
      focusInput(index + 1)
    }
  }

  const handleKeyDown = (index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      focusInput(index - 1)
      return
    }

    if (event.key === 'ArrowLeft' && index > 0) {
      event.preventDefault()
      focusInput(index - 1)
      return
    }

    if (event.key === 'ArrowRight' && index < length - 1) {
      event.preventDefault()
      focusInput(index + 1)
    }
  }

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault()
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    if (!pasted) return

    const nextDigits = Array.from({ length }, (_, index) => pasted[index] ?? '')
    updateValue(nextDigits)
    focusInput(Math.min(pasted.length, length - 1))
  }

  useEffect(() => {
    if (value.length === 0) {
      focusInput(0)
    }
  }, [value.length])

  return (
    <div
      className={`otp-input ${error ? 'otp-input--error' : ''}`.trim()}
      role="group"
      aria-label="Mã xác minh 6 chữ số"
    >
      {digits.map((digit, index) => (
        <input
          key={`${id}-${index}`}
          ref={(element) => {
            inputRefs.current[index] = element
          }}
          id={index === 0 ? id : undefined}
          className="otp-input__cell"
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          maxLength={1}
          value={digit}
          disabled={disabled}
          aria-label={`Chữ số ${index + 1}`}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(index, event)}
          onPaste={handlePaste}
          onFocus={(event) => event.currentTarget.select()}
        />
      ))}
    </div>
  )
}

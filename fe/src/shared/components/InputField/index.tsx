import type { InputHTMLAttributes, ReactNode } from 'react'
import './input-field.css'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  prefixIcon?: ReactNode
  suffixAction?: ReactNode
}

export default function InputField({
  label,
  error,
  prefixIcon,
  suffixAction,
  id,
  className = '',
  ...props
}: InputFieldProps) {
  const inputId = id ?? props.name

  return (
    <div className={`input-field-group ${className}`.trim()}>
      <label className="input-field-group__label" htmlFor={inputId}>
        {label}
      </label>
      <div className={`input-field-group__control ${error ? 'input-field-group__control--error' : ''}`.trim()}>
        {prefixIcon ? <span className="input-field-group__prefix">{prefixIcon}</span> : null}
        <input id={inputId} className="input-field-group__input" {...props} />
        {suffixAction ? <span className="input-field-group__suffix">{suffixAction}</span> : null}
      </div>
      {error ? (
        <p className="input-field-group__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

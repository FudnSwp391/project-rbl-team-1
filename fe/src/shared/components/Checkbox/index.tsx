import type { InputHTMLAttributes, ReactNode } from 'react'
import './checkbox.css'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode
}

export default function Checkbox({ label, className = '', id, ...props }: CheckboxProps) {
  const checkboxId = id ?? props.name

  return (
    <label className={`checkbox ${className}`.trim()} htmlFor={checkboxId}>
      <input id={checkboxId} type="checkbox" className="checkbox__input" {...props} />
      <span className="checkbox__box" aria-hidden="true" />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}

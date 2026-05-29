export default function Input({ label, className = '', id, ...props }) {
  const inputId = id || props.name
  return (
    <label className={`input ${className}`.trim()} htmlFor={inputId}>
      {label && <span className="input__label">{label}</span>}
      <input id={inputId} className="input-field" {...props} />
    </label>
  )
}

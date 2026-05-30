import './divider.css'

interface DividerProps {
  label: string
}

export default function Divider({ label }: DividerProps) {
  return (
    <div className="divider" role="separator">
      <span className="divider__line" />
      <span className="divider__label">{label}</span>
      <span className="divider__line" />
    </div>
  )
}

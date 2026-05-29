export default function Modal({ open, onClose, title, children }) {
  if (!open) return null

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div className="modal__content">
        {title && <h2 className="modal__title">{title}</h2>}
        {children}
      </div>
    </div>
  )
}

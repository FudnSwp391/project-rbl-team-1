export default function EmptyState({ title = 'Không có dữ liệu', description }) {
  return (
    <div className="empty-state">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </div>
  )
}

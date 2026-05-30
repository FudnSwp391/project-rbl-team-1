import FriendUserCard from './FriendUserCard'

export default function FriendsResultsList({ users, total }) {
  if (users.length === 0) {
    return (
      <div className="friends-empty">
        <p className="friends-empty__title">Không tìm thấy bạn bè</p>
        <p className="friends-empty__desc">
          Thử từ khóa khác — ví dụ: <strong>tng</strong>
        </p>
      </div>
    )
  }

  return (
    <div className="friends-results">
      {total > 0 && <p className="friends-results__count">Tìm thấy {total} thành viên</p>}
      <div className="friends-results__list">
        {users.map((user) => (
          <FriendUserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}

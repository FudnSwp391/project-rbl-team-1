export default function ProfileAboutSection({ profile }) {
  return (
    <section className="profile-section">
      <h2>
        <UserIcon />
        Giới thiệu
      </h2>
      <div className="profile-about__content">
        <p>{profile.bio}</p>
      </div>
    </section>
  )
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="7" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 17c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

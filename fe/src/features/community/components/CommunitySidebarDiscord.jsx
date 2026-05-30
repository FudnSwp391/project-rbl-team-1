import { SUPPORT_CONTACT } from '@/features/support/supportMockData'

const DISCORD_URL = `https://${SUPPORT_CONTACT.discord}`

export default function CommunitySidebarDiscord() {
  return (
    <div className="community-sidebar__discord">
      <h4>Cộng đồng Discord</h4>
      <p>Kết nối cộng đồng, nhận hỗ trợ và cập nhật tin mới trên Discord.</p>
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="community-sidebar__discord-btn"
      >
        Tham gia Discord
      </a>
    </div>
  )
}

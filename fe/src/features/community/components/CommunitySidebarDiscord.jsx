import { SUPPORT_CONTACT } from '@/features/support/supportMockData'

const DISCORD_URL = `https://${SUPPORT_CONTACT.discord}`

export default function CommunitySidebarDiscord() {
  return (
    <div className="community-sidebar__discord">
      <h4>Cộng đồng Discord</h4>
      <p>
        Tham gia server Discord của chúng tôi để kết nối với cộng đồng, nhận hỗ trợ, và cập
        nhật thông tin mới nhất!
      </p>
      <a
        href={DISCORD_URL}
        target="_blank"
        rel="noreferrer noopener"
        className="community-sidebar__discord-btn"
      >
        Nhấn vào đây để tham gia
      </a>
    </div>
  )
}

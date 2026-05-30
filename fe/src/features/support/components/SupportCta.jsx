import { Link } from 'react-router-dom'

export default function SupportCta() {
  return (
    <section className="support-cta">
      <h2>Không tìm thấy câu trả lời?</h2>
      <p>
        Cộng đồng của chúng tôi luôn sẵn sàng hỗ trợ. Đừng ngần ngại liên hệ hoặc thảo luận cùng
        mọi người.
      </p>
      <div className="support-cta__actions">
        <Link to="/community" className="support-cta__primary">
          Tham gia cộng đồng
        </Link>
        <a href="#contact" className="support-cta__secondary">
          Liên hệ hỗ trợ
        </a>
      </div>
    </section>
  )
}

import { SUPPORT_CONTACT, SUPPORT_SUBJECTS } from '../supportMockData'

export default function SupportContact() {
  return (
    <section className="support-section">
      <h2 className="support-section__title">Gửi yêu cầu hỗ trợ</h2>
      <div className="support-contact">
        <aside className="support-contact__info">
          <h3>Thông tin liên hệ</h3>
          <ul>
            <li>
              <span className="support-contact__icon">
                <MailIcon />
              </span>
              <div>
                <strong>Email hỗ trợ</strong>
                <span>{SUPPORT_CONTACT.email}</span>
              </div>
            </li>
            <li>
              <span className="support-contact__icon">
                <DiscordIcon />
              </span>
              <div>
                <strong>Discord Server</strong>
                <span>{SUPPORT_CONTACT.discord}</span>
              </div>
            </li>
            <li>
              <span className="support-contact__icon">
                <ClockIcon />
              </span>
              <div>
                <strong>Thời gian phản hồi</strong>
                <span>{SUPPORT_CONTACT.responseTime}</span>
              </div>
            </li>
          </ul>
        </aside>

        <form className="support-contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="support-contact__row">
            <label>
              Họ và tên
              <input type="text" placeholder="Nhập họ tên của bạn" />
            </label>
            <label>
              Email
              <input type="email" placeholder="name@example.com" />
            </label>
          </div>
          <label>
            Chủ đề
            <select defaultValue="">
              <option value="" disabled>
                Chọn chủ đề cần hỗ trợ
              </option>
              {SUPPORT_SUBJECTS.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>
          <label>
            Mô tả chi tiết
            <textarea rows={5} placeholder="Mô tả chi tiết vấn đề bạn đang gặp phải..." />
          </label>
          <div className="support-contact__upload">
            <span className="support-contact__upload-label">Đính kèm tệp (Tùy chọn)</span>
            <label className="support-contact__dropzone">
              <UploadIcon />
              <span>
                Kéo thả tệp vào đây hoặc <em>chọn tệp</em>
              </span>
              <small>Hỗ trợ JPG, PNG, PDF (Max 5MB)</small>
              <input type="file" accept=".jpg,.jpeg,.png,.pdf" hidden />
            </label>
          </div>
          <button type="submit" className="support-contact__submit">
            Gửi yêu cầu
            <ArrowIcon />
          </button>
        </form>
      </div>
    </section>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
      <rect x="1" y="2" width="18" height="12" rx="2" stroke="#004ac6" strokeWidth="1.5" />
      <path d="M1 4l9 6 9-6" stroke="#004ac6" strokeWidth="1.5" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M16.5 4.5c-1.5-.7-3.1-1.2-4.8-1.5-.2.4-.5.9-.7 1.3-1.8-.3-3.5-.3-5.2 0-.2-.4-.4-.9-.7-1.3-1.7.3-3.3.8-4.8 1.5C1.2 8.2.5 11.8 1 15.3c2 1.5 4 2.4 5.9 3 .5-.7.9-1.4 1.2-2.2-.7-.3-1.3-.6-1.9-1 0 0 .1 0 .2.1 3.6 1.7 7.5 1.7 11 0 .1 0 .2-.1.2-.1-.6.4-1.2.7-1.9 1 .3.8.7 1.5 1.2 2.2 1.9-.6 3.9-1.5 5.9-3 .6-4.1-.1-7.7-2.5-10.8Z"
        stroke="#004ac6"
        strokeWidth="1.2"
      />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7" stroke="#004ac6" strokeWidth="1.5" />
      <path d="M10 6v4l3 2" stroke="#004ac6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" aria-hidden="true">
      <path d="M10 2v14M4 8l6-6 6 6" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M2 22h16" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" aria-hidden="true">
      <path d="M1 6h12M8 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

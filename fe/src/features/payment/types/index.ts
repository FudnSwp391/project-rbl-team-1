export const PAYMENT_STRINGS = {
  PAGE: {
    TITLE: 'Thanh toán thành công!',
    DESCRIPTION_LINE_1: 'Cảm ơn bạn đã tin tưởng nâng cấp gói Premium. Tài',
    DESCRIPTION_LINE_2: 'khoản của bạn đã được kích hoạt đầy đủ các tính',
    DESCRIPTION_LINE_3: 'năng đặc quyền.',
    TRANSACTION_TITLE: 'Chi tiết giao dịch',
    INVOICE_PREFIX: 'Hóa đơn đã được gửi đến email ',
    LOADING: 'Đang tải thông tin giao dịch...',
    ERROR: 'Không thể tải thông tin giao dịch. Vui lòng thử lại.',
  },
  TRANSACTION: {
    PLAN_LABEL: 'Gói đăng ký',
    TOTAL_LABEL: 'Tổng thanh toán',
    TRANSACTION_ID_LABEL: 'Mã giao dịch',
    METHOD_LABEL: 'Phương thức',
    COPY_LABEL: 'Sao chép mã giao dịch',
    COPIED_LABEL: 'Đã sao chép',
  },
  ACTIONS: {
    HOME: 'Về trang chủ',
    EXPLORE_EXAMS: 'Khám phá Thư viện đề thi',
  },
  HEADER: {
    SEARCH_PLACEHOLDER: 'Tìm kiếm tài liệu, khóa học...',
    BRAND: 'SEHub',
  },
  SIDEBAR: {
    HOME: 'Trang chủ',
    ADVISOR: 'Trợ lý tư vấn',
    FIND_FRIENDS: 'Tìm kiếm bạn bè',
    SUBJECTS_SECTION: 'MÔN HỌC',
    REVIEW_QUESTIONS: 'Câu hỏi ôn tập',
    PRACTICE_QUESTIONS: 'Câu hỏi thực hành',
    DOCUMENTS: 'Tài liệu',
    INTERACTION_SECTION: 'TƯƠNG TÁC',
    MESSAGES: 'Nhắn tin',
    COMMUNITY_TITLE: 'Cộng đồng SEHub',
    COMMUNITY_DESCRIPTION_LINE_1: 'Tham gia Discord để nhận tài liệu',
    COMMUNITY_DESCRIPTION_LINE_2: 'miễn phí và hỗ trợ 24/7.',
    COMMUNITY_CTA: 'Tham gia cộng đồng',
    HELP: 'Trợ giúp',
  },
  MOCK_USER: {
    USERNAME: 'tngo28299',
    EMAIL: 'tngo28299@gmail.com',
    STREAK_COUNT: 7,
    NOTIFICATION_COUNT: 7,
    MESSAGE_COUNT: 3,
  },
  FLOATING_CHAT: {
    LABEL: 'Mở trò chuyện hỗ trợ',
  },
} as const

export interface PaymentSuccessData {
  planName: string
  totalAmount: number
  transactionId: string
  paymentMethod: string
  paymentMethodLabel: string
  invoiceEmail: string
}

export interface TransactionDetailItem {
  id: string
  label: string
  value: string
  tone?: 'default' | 'primary' | 'mono'
  copyable?: boolean
  icon?: 'payos'
}

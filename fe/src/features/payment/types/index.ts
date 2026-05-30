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
  CHECKOUT: {
    BACK: 'Quay lại',
    BADGE: 'Cổng thanh toán an toàn',
    TITLE: 'Hoàn tất thanh toán Premium',
    DESCRIPTION: 'Mở khóa toàn bộ tính năng học tập nâng cao dành riêng cho thành viên SEHub.',
    ORDER_TITLE: 'Chi tiết đơn hàng',
    PREMIUM_BADGE: 'PREMIUM',
    ORIGINAL_PRICE_LABEL: 'Giá gốc:',
    DISCOUNT_LABEL: 'Ưu đãi SEHub:',
    DETAIL_LABEL: 'Chi tiết:',
    TOTAL_LABEL: 'Tổng thanh toán:',
    SECURITY_TITLE: 'Thanh toán an toàn với PayOS',
    SECURITY_DESCRIPTION: 'Giao dịch được mã hóa và xử lý tự động ngay lập tức.',
    GATEWAY_TITLE: 'Cổng thanh toán trực tuyến',
    QR_HINT_LINE_1: 'Quét mã QR bằng ứng dụng',
    QR_HINT_BANK: 'Ngân hàng',
    QR_HINT_OR: ' hoặc ',
    QR_HINT_WALLET: 'Ví điện tử',
    BANK_LABEL: 'NGÂN HÀNG',
    ACCOUNT_NUMBER_LABEL: 'SỐ TÀI KHOẢN',
    ACCOUNT_NAME_LABEL: 'TÊN TÀI KHOẢN',
    TRANSFER_CONTENT_LABEL: 'NỘI DUNG',
    OPEN_BANK_APP: 'Mở ứng dụng ngân hàng',
    CANCEL_PAYMENT: 'Hủy thanh toán',
    COPY_LABEL: 'Sao chép',
    LOADING: 'Đang tải thông tin thanh toán...',
    ERROR: 'Không thể tải thông tin thanh toán. Vui lòng thử lại.',
  },
} as const

export interface PaymentCheckoutOrder {
  planName: string
  description: string
  originalPrice: number
  discountLabel: string
  priceDetail: string
  totalAmount: number
}

export interface PaymentCheckoutBankTransfer {
  bankName: string
  accountNumber: string
  accountName: string
  transferContent: string
}

export interface PaymentCheckoutData {
  order: PaymentCheckoutOrder
  bankTransfer: PaymentCheckoutBankTransfer
  expiresInSeconds: number
}

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

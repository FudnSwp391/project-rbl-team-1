export const EXAM_DETAIL_STRINGS = {
  HEADER: {
    SEARCH_PLACEHOLDER: 'Tìm kiếm đề thi, câu hỏi...',
    BRAND: 'SEHub',
  },
  MOCK_USER: {
    EMAIL: 'tngo28259@gmail.com',
    INITIAL: 'T',
    NOTIFICATION_COUNT: 7,
    STREAK_COUNT: 7,
  },
  PRACTICE_USER: {
    EMAIL: 'tngo20290@gmail.com',
    INITIAL: 'T',
    NOTIFICATION_COUNT: 7,
    STREAK_COUNT: 7,
  },
  BACK: 'Quay lại',
  EXAM_INFO: {
    TITLE: 'Thông tin đề thi',
    EXAM_CODE: 'MÃ ĐỀ:',
    SUBJECT_CODE: 'MÃ MÔN HỌC:',
    EXAM_TYPE: 'LOẠI:',
    TOTAL_QUESTIONS: 'TỔNG SỐ CÂU:',
  },
  QUESTION: {
    SUBTITLE: 'Luyện tập câu hỏi lẻ',
    START: 'Bắt đầu làm bài',
    PAGINATION: (current: number, total: number) => `${current} / ${total}`,
  },
  AI: {
    TITLE: 'AI GIẢI THÍCH CHI TIẾT',
    REGENERATE: 'Yêu cầu giải thích lại',
    NOTE_PREFIX: 'Lưu ý đề thi:',
    CHAT_PLACEHOLDER: 'Đặt câu hỏi thêm cho AI về câu này...',
    TOKENS: (used: number, total: number) => `${used}/${total.toLocaleString('vi-VN')} tokens`,
    SEND: 'Gửi câu hỏi cho AI',
  },
  AI_TOKENS: {
    USED: 850,
    TOTAL: 1000,
  },
  COMMENTS: {
    TITLE: 'Bình luận',
    VIEW_ALL: 'Xem tất cả',
    REPLY: 'Trả lời',
    PLACEHOLDER: 'Viết bình luận của bạn...',
    SEND: 'Gửi bình luận',
  },
  RELATED: {
    TITLE: 'Đề thi liên quan',
    VIEW_MORE: 'Xem thêm',
    EMPTY: 'Không có đề thi liên quan nào được tìm thấy',
  },
  LOADING: 'Đang tải đề thi...',
  ERROR: 'Không thể tải đề thi. Vui lòng thử lại.',
} as const

export interface ExamInfo {
  examCode: string
  subjectCode: string
  examType: string
  totalQuestions: number
}

export interface QuestionOption {
  id: string
  label: string
  text: string
  isCorrect?: boolean
}

export interface QuestionData {
  id: string
  text: string
  options: QuestionOption[]
  currentIndex: number
  totalCount: number
}

export interface AiExplanationBullet {
  term: string
  description: string
}

export interface AiExplanation {
  intro: string[]
  bullets: AiExplanationBullet[]
  note: string
}

export interface ExamComment {
  id: string
  authorName: string
  authorInitials: string
  avatarTone: 'default' | 'primary'
  timestamp: string
  content: string
  likeCount: number
  isLiked?: boolean
  isHighlighted?: boolean
}

export interface RelatedExam {
  id: string
  title: string
  subjectCode: string
}

export interface ExamDetailData {
  examInfo: ExamInfo
  question: QuestionData
  aiExplanation: AiExplanation
  comments: ExamComment[]
  commentCount: number
  relatedExams: RelatedExam[]
}

export interface CommentFormValues {
  content: string
}

export interface AiQuestionFormValues {
  question: string
}

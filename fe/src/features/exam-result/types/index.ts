export const EXAM_RESULT_STRINGS = {
  HEADER: {
    SEARCH_PLACEHOLDER: 'Tìm kiếm đề thi, câu hỏi...',
  },
  MOCK_USER: {
    EMAIL: 'tngo28259@gmail.com',
    INITIAL: 'T',
    NOTIFICATION_COUNT: 7,
    STREAK_COUNT: 7,
  },
  BACK: 'Quay lại',
  PAGE_TITLE: 'Kết quả kỳ thi',
  SUMMARY: {
    EXAM_CODE_LABEL: 'MÃ ĐỀ THI',
    TOTAL_QUESTIONS: (count: number) => `Tổng số câu hỏi: ${count}`,
    EXPORT: 'Xuất báo cáo',
    SCORE_LABEL: 'ĐIỂM SỐ',
    GRADE: (grade: string) => `Xếp loại: ${grade}`,
    CORRECT_LABEL: 'ĐÚNG',
    ACCURACY: (percent: number) => `Độ chính xác ${percent}%`,
    INCORRECT_LABEL: 'SAI',
    REVIEW_HINT: 'Cần ôn tập lại',
  },
  QUESTION: {
    CORRECT: 'CHÍNH XÁC',
    INCORRECT: 'CHƯA ĐÚNG',
    VIEW_EXPLANATION: 'Xem giải thích chi tiết',
    YOUR_CHOICE: 'LỰA CHỌN CỦA BẠN',
    CORRECT_ANSWER: 'ĐÁP ÁN ĐÚNG',
  },
  BREADCRUMB: {
    SUBJECT: 'Môn học',
    COURSE: 'CS101: Nhập môn lập trình',
    RESULT: 'Kết quả thi cuối kỳ',
  },
  LOADING: 'Đang tải kết quả thi...',
  ERROR: 'Không thể tải kết quả thi. Vui lòng thử lại.',
} as const

export type QuestionResultStatus = 'correct' | 'incorrect'

export type ResultOptionState = 'neutral' | 'correct' | 'user-wrong'

export interface ResultOption {
  id: string
  label: string
  text: string
  state: ResultOptionState
  sublabel?: string
}

export interface ResultQuestion {
  id: string
  number: number
  text: string
  status: QuestionResultStatus
  options: ResultOption[]
}

export interface ExamResultSummary {
  examCode: string
  examTitle: string
  totalQuestions: number
  score: number
  grade: string
  correctCount: number
  accuracyPercent: number
  incorrectCount: number
}

export interface ExamResultData {
  summary: ExamResultSummary
  questions: ResultQuestion[]
}

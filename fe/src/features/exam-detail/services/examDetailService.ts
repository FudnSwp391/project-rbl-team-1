import { fetchExamDetail } from '@/features/exam-detail/api'
import type { ExamDetailData } from '@/features/exam-detail/types'

const DEFAULT_EXAM_DETAIL: ExamDetailData = {
  examInfo: {
    examCode: 'FEPRF192FA24BL5FE',
    subjectCode: 'PRF192',
    examType: 'FINAL',
    totalQuestions: 38,
  },
  question: {
    id: 'q1',
    text: 'Which is a function in C language?',
    currentIndex: 1,
    totalCount: 50,
    options: [
      { id: 'a', label: 'A', text: 'is_prime()' },
      { id: 'b', label: 'B', text: '#include()', isCorrect: true },
      { id: 'c', label: 'C', text: 'int()' },
      { id: 'd', label: 'D', text: 'if()' },
      { id: 'e', label: 'E', text: 'return()' },
      { id: 'f', label: 'F', text: '2ndElement()' },
    ],
  },
  aiExplanation: {
    intro: [
      'Trong danh sách các lựa chọn trên, không có lựa chọn nào thực sự là một hàm (function) tích hợp sẵn của ngôn ngữ C theo nghĩa chuẩn mực nhất. Tuy nhiên, nếu xét kỹ:',
    ],
    bullets: [
      {
        term: '#include',
        description:
          ': Là một chỉ thị tiền xử lý (preprocessor directive), không phải hàm.',
      },
      {
        term: 'int, if, return',
        description: ': Đều là các từ khóa (keywords) dành riêng trong C.',
      },
      {
        term: 'is_prime()',
        description:
          ': Đây là một tên hàm hợp lệ nhưng phải được lập trình viên định nghĩa trước khi sử dụng.',
      },
      {
        term: '2ndElement()',
        description: ': Tên hàm không hợp lệ vì bắt đầu bằng chữ số.',
      },
    ],
    note: 'Đôi khi trong các bộ đề trắc nghiệm cơ bản (như PRF192), câu hỏi có thể mang tính đánh đố hoặc sai sót về thuật ngữ. Đáp án #include() thường được chọn nếu đề bài nhầm lẫn cú pháp có dấu ngoặc () là hàm, mặc dù về mặt kỹ thuật nó hoàn toàn sai. Hãy ưu tiên kiểm tra lại ngữ cảnh giáo trình của bạn.',
  },
  comments: [
    {
      id: 'c1',
      authorName: 'Anh Tuấn',
      authorInitials: 'AT',
      avatarTone: 'default',
      timestamp: '2 giờ trước',
      content:
        'Câu này khá là hay, mình hay nhầm với mấy cái preprocessor directive. Cảm ơn AI đã giải thích kỹ.',
      likeCount: 12,
    },
    {
      id: 'c2',
      authorName: 'Lan Phương',
      authorInitials: 'LP',
      avatarTone: 'primary',
      timestamp: '15 phút trước',
      content: 'Học PRF192 sợ nhất mấy câu lý thuyết chữ như này. Cố lên mọi người!',
      likeCount: 3,
      isLiked: true,
      isHighlighted: true,
    },
  ],
  commentCount: 12,
  relatedExams: [],
}

export const getDefaultExamDetailData = (): ExamDetailData => ({
  ...DEFAULT_EXAM_DETAIL,
  examInfo: { ...DEFAULT_EXAM_DETAIL.examInfo },
  question: {
    ...DEFAULT_EXAM_DETAIL.question,
    options: DEFAULT_EXAM_DETAIL.question.options.map((option) => ({ ...option })),
  },
  aiExplanation: {
    ...DEFAULT_EXAM_DETAIL.aiExplanation,
    intro: [...DEFAULT_EXAM_DETAIL.aiExplanation.intro],
    bullets: DEFAULT_EXAM_DETAIL.aiExplanation.bullets.map((bullet) => ({ ...bullet })),
  },
  comments: DEFAULT_EXAM_DETAIL.comments.map((comment) => ({ ...comment })),
  relatedExams: [...DEFAULT_EXAM_DETAIL.relatedExams],
})

export const normalizeExamDetailData = (
  payload: Partial<ExamDetailData> | undefined,
): ExamDetailData => {
  const fallback = getDefaultExamDetailData()

  return {
    examInfo: {
      examCode: payload?.examInfo?.examCode || fallback.examInfo.examCode,
      subjectCode: payload?.examInfo?.subjectCode || fallback.examInfo.subjectCode,
      examType: payload?.examInfo?.examType || fallback.examInfo.examType,
      totalQuestions: payload?.examInfo?.totalQuestions ?? fallback.examInfo.totalQuestions,
    },
    question: {
      id: payload?.question?.id || fallback.question.id,
      text: payload?.question?.text || fallback.question.text,
      currentIndex: payload?.question?.currentIndex ?? fallback.question.currentIndex,
      totalCount: payload?.question?.totalCount ?? fallback.question.totalCount,
      options: payload?.question?.options?.length
        ? payload.question.options
        : fallback.question.options,
    },
    aiExplanation: payload?.aiExplanation
      ? {
          intro: payload.aiExplanation.intro?.length
            ? payload.aiExplanation.intro
            : fallback.aiExplanation.intro,
          bullets: payload.aiExplanation.bullets?.length
            ? payload.aiExplanation.bullets
            : fallback.aiExplanation.bullets,
          note: payload.aiExplanation.note || fallback.aiExplanation.note,
        }
      : fallback.aiExplanation,
    comments: payload?.comments?.length ? payload.comments : fallback.comments,
    commentCount: payload?.commentCount ?? fallback.commentCount,
    relatedExams: payload?.relatedExams ?? fallback.relatedExams,
  }
}

export const loadExamDetailData = async (examId?: string): Promise<ExamDetailData> => {
  if (!examId) {
    return getDefaultExamDetailData()
  }

  try {
    const response = await Promise.race([
      fetchExamDetail(examId),
      new Promise<never>((_, reject) => {
        window.setTimeout(() => reject(new Error('Exam detail API timeout')), 3000)
      }),
    ])
    return normalizeExamDetailData(response.data)
  } catch {
    return getDefaultExamDetailData()
  }
}

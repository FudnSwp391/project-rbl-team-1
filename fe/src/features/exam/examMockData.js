export const EXAM_SEMESTERS = [
  {
    semester: 1,
    courses: [
      { code: 'CSI105', major: 'AI' },
      { code: 'PFP191', major: 'SE' },
      { code: 'CSI106', major: 'SE' },
      { code: 'CSI104', major: 'SE' },
      { code: 'CEA201', major: 'SE' },
      { code: 'PRF192', major: 'SE' },
    ],
  },
  {
    semester: 2,
    courses: [
      { code: 'CSD203', major: 'AI' },
      { code: 'AIG202C', major: 'AI' },
      { code: 'NWC204', major: 'SE' },
      { code: 'MAD101', major: 'SE' },
      { code: 'PRO192', major: 'SE' },
      { code: 'NWC203C', major: 'SE' },
      { code: 'OSG202', major: 'SE' },
      { code: 'SSG104', major: 'SE' },
    ],
  },
  {
    semester: 3,
    courses: [
      { code: 'SEM101', major: 'AI' },
      { code: 'RMC201', major: 'AI' },
      { code: 'MAI391', major: 'AI' },
      { code: 'ITE303C', major: 'SE' },
      { code: 'JPD113', major: 'SE' },
      { code: 'CSD201', major: 'SE' },
      { code: 'LAB211', major: 'SE' },
      { code: 'WED201C', major: 'SE' },
    ],
  },
  {
    semester: 4,
    courses: [
      { code: 'SWD392', major: 'SE' },
      { code: 'SWP391', major: 'SE' },
      { code: 'SWT301', major: 'SE' },
      { code: 'SWR302', major: 'SE' },
      { code: 'PRJ301', major: 'SE' },
      { code: 'EXE201', major: 'SE' },
      { code: 'ENT201', major: 'SE' },
      { code: 'MAS291', major: 'SE' },
    ],
  },
  {
    semester: 5,
    courses: [
      { code: 'PRN212', major: 'SE' },
      { code: 'ITE302C', major: 'SE' },
      { code: 'SWP391', major: 'SE' },
      { code: 'SWT301', major: 'SE' },
      { code: 'SWR302', major: 'SE' },
    ],
  },
  {
    semester: 6,
    courses: [
      { code: 'OJT202', major: 'SE' },
      { code: 'ENW493C', major: 'SE' },
    ],
  },
  {
    semester: 7,
    courses: [
      { code: 'PRN221', major: 'SE' },
      { code: 'PMG202C', major: 'SE' },
      { code: 'EXE101', major: 'SE' },
      { code: 'SWD392', major: 'SE' },
      { code: 'PRU212', major: 'SE' },
      { code: 'PRN222', major: 'SE' },
      { code: 'PMG201C', major: 'SE' },
    ],
  },
  {
    semester: 8,
    courses: [
      { code: 'MMA301', major: 'SE' },
      { code: 'PRM392', major: 'SE' },
      { code: 'MLN122', major: 'SE' },
      { code: 'MLN111', major: 'SE' },
      { code: 'PRN231', major: 'SE' },
      { code: 'WDU203C', major: 'SE' },
      { code: 'EXE201', major: 'SE' },
    ],
  },
  {
    semester: 9,
    courses: [
      { code: 'SE_GRA_ELE', major: 'SE' },
      { code: 'HCM202', major: 'SE' },
      { code: 'VNR202', major: 'SE' },
      { code: 'MLN131', major: 'SE' },
    ],
  },
]

const PFP191_EXAM_SETS = [
  { id: 'pfp-1', code: 'FEPFP191SP2024FE', uploadedAt: '2025-11-17, 17:46:20', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-2', code: 'FEPFP191SU24FE', uploadedAt: '2025-11-17, 17:45:18', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-3', code: 'FEPFP191F23FE', uploadedAt: '2025-11-17, 17:44:47', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-4', code: 'FEPFP191SP2023FE', uploadedAt: '2025-11-17, 17:44:06', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-5', code: 'FEPFP191SU23FE', uploadedAt: '2025-11-17, 17:43:29', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-6', code: 'FEPFP191F22FE', uploadedAt: '2025-11-17, 17:42:51', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-7', code: 'FEPFP191SP2022FE', uploadedAt: '2025-11-17, 17:42:10', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-8', code: 'FEPFP191SU22FE', uploadedAt: '2025-11-17, 17:41:33', type: 'Cuối kỳ', questionCount: 50 },
  { id: 'pfp-9', code: 'FEPFP191F21FE', uploadedAt: '2025-11-17, 17:40:58', type: 'Cuối kỳ', questionCount: 50 },
]

const SUBJECT_EXAM_SETS = {
  PFP191: PFP191_EXAM_SETS,
}

function buildGenericExamSets(subjectCode) {
  return [
    {
      id: `${subjectCode}-1`,
      code: `FE${subjectCode}SP2024FE`,
      uploadedAt: '2025-11-17, 17:46:20',
      type: 'Cuối kỳ',
      questionCount: 50,
    },
    {
      id: `${subjectCode}-2`,
      code: `FE${subjectCode}SU24FE`,
      uploadedAt: '2025-11-17, 17:45:18',
      type: 'Cuối kỳ',
      questionCount: 50,
    },
    {
      id: `${subjectCode}-3`,
      code: `FE${subjectCode}F23FE`,
      uploadedAt: '2025-11-17, 17:44:47',
      type: 'Cuối kỳ',
      questionCount: 50,
    },
  ]
}

export function getSubjectExamSets(subjectCode) {
  const normalized = subjectCode?.trim().toUpperCase()
  if (!normalized) return []

  return SUBJECT_EXAM_SETS[normalized] ?? buildGenericExamSets(normalized)
}

export function isValidExamSubject(subjectCode) {
  const normalized = subjectCode?.trim().toUpperCase()
  if (!normalized) return false

  return EXAM_SEMESTERS.some(({ courses }) =>
    courses.some((course) => course.code.toUpperCase() === normalized),
  )
}

export function getExamSetById(subjectCode, examId) {
  const normalized = subjectCode?.trim().toUpperCase()
  if (!normalized || !examId) return null

  return getSubjectExamSets(normalized).find((exam) => exam.id === examId) ?? null
}

const DEFAULT_OPTIONS = [
  { id: 'a', label: 'A' },
  { id: 'b', label: 'B' },
  { id: 'c', label: 'C' },
  { id: 'd', label: 'D' },
]

const QUESTION_BANK = [
  'Trong lập trình hướng đối tượng, phương thức nào sau đây mô tả đúng khái niệm encapsulation?',
  'Interface và abstract class khác nhau ở điểm nào trong Java?',
  'Khi nào nên sử dụng inheritance thay vì composition?',
  'Phương thức override và overload khác nhau như thế nào?',
  'Access modifier nào cho phép truy cập trong cùng package?',
  'Constructor mặc định được sinh ra khi nào?',
  'Polymorphism được thể hiện qua cơ chế nào trong OOP?',
  'Giá trị null có thể gán cho kiểu primitive không?',
  'Exception checked và unchecked khác nhau ở điểm nào?',
  'Collection nào không cho phép phần tử trùng lặp?',
]

function buildExamQuestions(totalQuestions, subjectCode) {
  return Array.from({ length: totalQuestions }, (_, index) => {
    const questionNumber = index + 1
    const baseText = QUESTION_BANK[index % QUESTION_BANK.length]

    return {
      index: questionNumber,
      questionText: baseText,
      options: DEFAULT_OPTIONS.map((option) => ({ ...option })),
    }
  })
}

export function getExamPreview(subjectCode, examId) {
  const examSet = getExamSetById(subjectCode, examId)
  if (!examSet) return null

  const normalized = subjectCode.trim().toUpperCase()
  const questions = buildExamQuestions(examSet.questionCount, normalized)

  return {
    id: examSet.id,
    code: examSet.code,
    subjectCode: normalized,
    examType: examSet.type,
    totalQuestions: examSet.questionCount,
    uploadedAt: examSet.uploadedAt,
    questions,
  }
}

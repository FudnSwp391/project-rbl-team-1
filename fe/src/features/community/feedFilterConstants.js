export const FEED_SEMESTER_OPTIONS = [
  { value: 'all', label: 'Tất cả học kỳ' },
  ...Array.from({ length: 8 }, (_, index) => ({
    value: String(index + 1),
    label: `Học kỳ ${index + 1}`,
  })),
]

export const FEED_MAJOR_OPTIONS = [
  { value: 'all', label: 'Tất cả chuyên ngành' },
  { value: 'SE', label: 'SE' },
  { value: 'AI', label: 'AI' },
]

export const DEFAULT_FEED_SEMESTER = '6'
export const DEFAULT_FEED_MAJOR = 'all'

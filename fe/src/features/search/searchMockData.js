const EMPTY_COUNTS = {
  all: 0,
  blogs: 0,
  materials: 0,
  exams: 0,
  questions: 0,
  users: 0,
}

const MOCK_LONG_RESULTS = {
  counts: { all: 5, blogs: 1, materials: 0, exams: 0, questions: 0, users: 4 },
  blogs: [
    {
      id: 'b1',
      author: {
        name: 'minh_anh_02',
        initial: 'M',
        avatarBg: '#dbe1ff',
        avatarColor: '#004ac6',
      },
      postedAt: '2 giờ trước',
      excerpt: '# **Review LongNQ** Ai học rùi cho e xin feedback với ạ',
      stats: { likes: 2, comments: 0, views: '45' },
    },
  ],
  users: [
    {
      id: 'u1',
      name: 'Long Nguyen',
      username: '@longnq',
      major: 'SE',
      initial: 'L',
      avatarBg: '#d6e3ff',
      avatarColor: '#515f78',
    },
    {
      id: 'u2',
      name: 'Long Hoàng',
      username: '@longhoang',
      major: 'SE',
      initial: 'L',
      avatarBg: '#e8f0ff',
      avatarColor: '#2563eb',
    },
    {
      id: 'u3',
      name: 'Phạm Thị Long',
      username: '@ptlong',
      major: 'SS',
      initial: 'P',
      avatarBg: '#fef3c7',
      avatarColor: '#b45309',
    },
    {
      id: 'u4',
      name: 'Trần Văn Long',
      username: '@tvlong',
      major: 'OSG',
      initial: 'T',
      avatarBg: '#dcfce7',
      avatarColor: '#15803d',
    },
  ],
}

export function getSearchResults(query) {
  const normalized = query.trim().toLowerCase()

  if (!normalized) {
    return { counts: EMPTY_COUNTS, blogs: [], users: [] }
  }

  if (normalized.includes('long')) {
    return MOCK_LONG_RESULTS
  }

  return { counts: EMPTY_COUNTS, blogs: [], users: [] }
}

export const SEARCH_TABS = [
  { id: 'all', label: 'Tất cả', countKey: 'all' },
  { id: 'blogs', label: 'Blogs', countKey: 'blogs' },
  { id: 'materials', label: 'Tài liệu', countKey: 'materials' },
  { id: 'exams', label: 'Đề thi', countKey: 'exams' },
  { id: 'questions', label: 'Câu hỏi', countKey: 'questions' },
  { id: 'users', label: 'Người dùng', countKey: 'users' },
]

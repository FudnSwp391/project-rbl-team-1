function buildHeatmap() {
  return Array.from({ length: 7 }, (_, row) =>
    Array.from({ length: 26 }, (_, col) => (row + col) % 5),
  )
}

const BASE_PROFILE = {
  major: 'SE',
  avatarBg: '#dbe1ff',
  avatarColor: '#004ac6',
  bio: 'Sinh viên đam mê lập trình và chia sẻ kiến thức với cộng đồng SEHub.',
  streakDays: 12,
  streakGoal: 30,
  stats: [
    { value: 12, label: 'Bài viết' },
    { value: 156, label: 'Bình luận' },
    { value: 89, label: 'Người theo dõi' },
    { value: 24, label: 'Đang theo dõi' },
  ],
  badges: [
    { id: 'b1', name: 'Người mới', icon: 'star', earned: true },
    { id: 'b2', name: 'Tích cực', icon: 'zap', earned: true },
    { id: 'b3', name: 'Chuyên gia', icon: 'trophy', earned: true },
    { id: 'b4', name: 'Top 10%', icon: 'award', earned: false },
  ],
  recentPosts: [
    {
      id: 'p1',
      title: 'Hướng dẫn cơ bản về thuật toán sắp xếp (Sorting Algorithms)',
      excerpt:
        'Trong bài viết này, chúng ta sẽ tìm hiểu về các thuật toán sắp xếp cơ bản như Bubble Sort, Selection Sort, và Insertion Sort.',
      likes: 24,
      comments: 8,
      views: '1.2k',
    },
    {
      id: 'p2',
      title: 'Chia sẻ kinh nghiệm phỏng vấn thực tập sinh ReactJS',
      excerpt:
        'Tuần trước mình vừa pass phỏng vấn vị trí Intern Frontend tại một công ty công nghệ lớn.',
      likes: 18,
      comments: 15,
      views: '856',
    },
  ],
  activityCount: 128,
  heatmap: buildHeatmap(),
}

const PROFILE_OVERRIDES = {
  tngo282999: {
    username: 'tngo282999',
    displayName: 'Hoàng Nam',
    initial: 'H',
    email: 'tngo282999@gmail.com',
    major: 'SE',
    streakDays: 7,
    stats: [
      { value: 24, label: 'Bài viết' },
      { value: 156, label: 'Bình luận' },
      { value: 89, label: 'Người theo dõi' },
      { value: 12, label: 'Đang theo dõi' },
    ],
  },
  anhcoding12345: {
    username: 'anhcoding12345',
    displayName: 'Nguyễn Hoàng Anh',
    initial: 'A',
    email: 'anhcoding12345@gmail.com',
  },
  phatnguyentan2205: {
    username: 'phatnguyentan2205',
    displayName: 'Phát Nguyễn',
    initial: 'P',
    avatarBg: '#dbe1ff',
    avatarColor: '#004ac6',
    major: 'AI',
    stats: [
      { value: 8, label: 'Bài viết' },
      { value: 42, label: 'Bình luận' },
      { value: 31, label: 'Người theo dõi' },
      { value: 18, label: 'Đang theo dõi' },
    ],
  },
  lamnv_dev: {
    username: 'lamnv_dev',
    displayName: 'Lâm NV',
    initial: 'L',
    avatarBg: '#dbe1ff',
    avatarColor: '#004ac6',
    major: 'SE',
  },
  khanh_fpt_se: {
    username: 'khanh_fpt_se',
    displayName: 'Khanh FPT',
    initial: 'K',
    avatarBg: '#d6e3ff',
    avatarColor: '#515f78',
    major: 'SE',
  },
}

export function getProfileByUsername(username) {
  const normalized = username?.trim().toLowerCase()
  if (!normalized) return null

  if (PROFILE_OVERRIDES[normalized]) {
    return {
      ...BASE_PROFILE,
      ...PROFILE_OVERRIDES[normalized],
      heatmap: buildHeatmap(),
    }
  }

  if (normalized.includes('long')) {
    return {
      ...BASE_PROFILE,
      username: normalized,
      displayName: normalized,
      initial: normalized.charAt(0).toUpperCase(),
      heatmap: buildHeatmap(),
    }
  }

  return null
}

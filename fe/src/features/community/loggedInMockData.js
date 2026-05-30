export const LOGGED_IN_USER = {
  username: 'Anhpika',
  email: 'anhpika12345@gmail.com',
  displayName: 'Anhpika',
  profileHref: '/profile',
}

export const STREAK_DATA = {
  count: 7,
  message: 'Bạn đang làm rất tốt, Anhpika!',
  weekDays: [
    { label: 'T2', completed: true },
    { label: 'T3', completed: true },
    { label: 'T4', completed: true },
    { label: 'T5', completed: true },
    { label: 'T6', completed: false },
    { label: 'T7', completed: false },
    { label: 'CN', completed: false },
  ],
}

export const ACTIVITY_STATS = [
  { value: '24', label: 'Bài viết' },
  { value: '156', label: 'Bình luận' },
  { value: '89', label: 'Theo dõi' },
  { value: '12', label: 'Huy hiệu' },
]

export const HEADER_BADGES = {
  notifications: 2,
}

export const NOTIFICATIONS = [
  {
    id: 'n1',
    title: 'Bài viết đã được duyệt',
    message: 'Bài viết "Tips ôn thi SWR302" của bạn đã được admin phê duyệt và xuất bản.',
    time: '10 phút trước',
    read: false,
  },
  {
    id: 'n2',
    title: 'Có người theo dõi bạn',
    message: 'tngo282999 vừa bắt đầu theo dõi bạn trên SEHub.',
    time: '2 giờ trước',
    read: false,
  },
]

export const DAILY_TASKS = [
  { id: 'tests-2', title: 'Hoàn thành 2 bài kiểm tra', current: 0, target: 2 },
  { id: 'likes-7', title: 'Thực hiện 7 like', current: 0, target: 7 },
  { id: 'tests-5', title: 'Hoàn thành 5 bài kiểm tra', current: 0, target: 5 },
  { id: 'post-1', title: 'Đăng 1 bài viết', current: 0, target: 2 },
  { id: 'post-3', title: 'Đăng 3 bài viết', current: 0, target: 3 },
]

export function getDailyTaskProgress(tasks = DAILY_TASKS) {
  const completed = tasks.filter((task) => task.current >= task.target).length
  return { completed, total: tasks.length }
}

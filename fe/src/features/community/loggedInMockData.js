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
  notifications: 7,
}

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

export const FEED_POSTS = [
  {
    id: 1,
    author: 'lamnv_dev',
    initial: 'L',
    avatarBg: '#dbe1ff',
    avatarColor: '#004ac6',
    meta: '5 giờ trước • CLB JS Club',
    title: 'Workshop: Làm chủ React cho dự án thực tế tại campus Hòa Lạc',
    excerpt:
      'Thứ 7 tuần này CLB mình có tổ chức buổi workshop nhỏ tại phòng 204 tòa Alpha. Bạn nào quan tâm đến React và muốn nâng cao kỹ năng frontend thì đăng ký tham gia nhé!',
    body: [
      'Thứ 7 tuần này CLB mình có tổ chức buổi workshop nhỏ tại phòng 204 tòa Alpha. Bạn nào quan tâm đến React và muốn nâng cao kỹ năng frontend thì đăng ký tham gia nhé!',
      'Buổi workshop sẽ tập trung vào các pattern thực tế khi làm việc với React trong dự án: quản lý state, tối ưu render, tổ chức component và tích hợp API.',
      'Thời gian: 14:00 – 17:00 | Địa điểm: Phòng 204, tòa Alpha. Số lượng có hạn, đăng ký qua form trong bài hoặc inbox CLB JS Club.',
    ],
    tags: ['Sự kiện', 'ReactJS'],
    semester: 6,
    major: 'SE',
    likes: 42,
    comments: 8,
    views: '1.2k',
    commentList: [
      {
        id: 'c1',
        author: 'minh_se_22',
        initial: 'M',
        avatarBg: '#ffe4e6',
        avatarColor: '#be123c',
        meta: '2 giờ trước',
        content: 'Workshop này có cần đăng ký trước không bạn?',
        likes: 3,
      },
      {
        id: 'c2',
        author: 'tngo282999',
        initial: 'T',
        avatarBg: '#dbe1ff',
        avatarColor: '#004ac6',
        meta: '1 giờ trước',
        content: 'Mình tham gia buổi trước rồi, mentor hướng dẫn rất chi tiết. Nên đi sớm để có chỗ ngồi nhé!',
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    author: 'khanh_fpt_se',
    initial: 'K',
    avatarBg: '#d6e3ff',
    avatarColor: '#515f78',
    meta: '2 giờ trước • Chuyên ngành SE',
    title: 'Kinh nghiệm chọn nhóm Capstone Project 1 cho kỳ tới?',
    excerpt:
      'Chào mọi người, mình sắp lên kỳ 7 và đang lo lắng về việc chọn nhóm làm đồ án. Nên chọn nhóm dựa trên sở thích cá nhân hay kỹ năng thực tế của mỗi người hơn?',
    body: [
      'Chào mọi người, mình sắp lên kỳ 7 và đang lo lắng về việc chọn nhóm làm đồ án. Nên chọn nhóm dựa trên sở thích cá nhân hay kỹ năng thực tế của mỗi người hơn?',
      'Theo kinh nghiệm của mình, nên cân bằng cả hai: chọn bạn có cùng mục tiêu điểm số và bổ sung kỹ năng cho nhau (ví dụ: 1 người giỏi backend, 1 người giỏi frontend, 1 người giỏi viết tài liệu).',
      'Ai đi trước cho mình xin ít review với! Mình đang phân vân giữa 2 nhóm ở lớp SE1701.',
    ],
    tags: ['Capstone', 'Kinh nghiệm'],
    semester: 7,
    major: 'SE',
    likes: 24,
    comments: 12,
    views: '450',
    commentList: [
      {
        id: 'c3',
        author: 'phatnguyentan2205',
        initial: 'P',
        avatarBg: '#dcfce7',
        avatarColor: '#15803d',
        meta: '45 phút trước',
        content: 'Mình recommend chọn theo kỹ năng hơn, đỡ stress khi chia task.',
        likes: 2,
      },
    ],
  },
]

export const TRENDING_POSTS = [
  'Top 5 công cụ AI nên dùng: Bí quyết bứt phá cho Dân IT 2025',
  'Hành trình học tập ấn tượng của Kim Khoa',
  'Từ mông lung đến bứt phá cùng AI: Hành trình của Hồng Phúc',
  'Vượt qua nỗi "Hoang mang đại học" cùng FTES',
  'Hành trình chạm đến Top 5 sinh viên xuất sắc của Chí Thông',
]

export function getPostById(id) {
  const numericId = Number(id)
  if (Number.isNaN(numericId)) return null
  return FEED_POSTS.find((post) => post.id === numericId) ?? null
}

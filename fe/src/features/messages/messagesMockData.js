export const MESSAGES_UNREAD_COUNT = 1

export const MOCK_CONVERSATIONS = [
  {
    id: 'c1',
    name: 'Long Hoàng',
    initial: 'LH',
    avatarColor: '#d6e3ff',
    textColor: '#515f78',
    statusLabel: 'Đang hoạt động',
    isOnline: true,
    dateDivider: 'Hôm nay',
    isTyping: true,
    messages: [
      {
        id: 'm1',
        sender: 'them',
        content:
          'Chào bạn, mình vừa gửi file đề PRF192 qua. Bạn xem giúp mình phần câu 15 nhé!',
        timeLabel: '10:30',
      },
      {
        id: 'm2',
        sender: 'me',
        content: 'Ok mình nhận rồi, để tối mình check lại rồi báo bạn. Cảm ơn nha!',
        timeLabel: '10:32',
      },
    ],
  },
  {
    id: 'c2',
    name: 'Nguyễn Minh',
    initial: 'NM',
    avatarColor: '#dbe1ff',
    textColor: '#004ac6',
    statusLabel: 'Hoạt động 2 giờ trước',
    isOnline: false,
    dateDivider: 'Hôm qua',
    messages: [
      {
        id: 'm3',
        sender: 'them',
        content: 'Ông xem giúp tớ phần deadline nộp bài với ạ.',
        timeLabel: '18:20',
      },
      {
        id: 'm4',
        sender: 'me',
        content: 'Cảm ơn ông nhé!',
        timeLabel: '18:45',
      },
    ],
  },
  {
    id: 'c3',
    name: 'Phạm Thị Long',
    initial: 'PT',
    avatarColor: '#fef3c7',
    textColor: '#b45309',
    statusLabel: 'Hoạt động 1 ngày trước',
    isOnline: false,
    dateDivider: 'Thứ Hai',
    messages: [
      {
        id: 'm5',
        sender: 'them',
        content: 'Hiện tại thì ổn rồi đó. Để tối mình check lại slide rồi gửi bạn.',
        timeLabel: '09:15',
      },
      {
        id: 'm6',
        sender: 'me',
        content: 'oce nha',
        timeLabel: '09:18',
      },
    ],
  },
]

export const MOCK_CHAT_PREVIEWS = [
  {
    id: 'c1',
    name: 'Long Hoàng',
    initial: 'LH',
    avatarColor: '#d6e3ff',
    textColor: '#515f78',
    lastMessage: 'Đã gửi 1 tệp đính kèm...',
    timeLabel: '10:45',
    isOnline: true,
    unreadCount: 1,
  },
  {
    id: 'c2',
    name: 'Nguyễn Minh',
    initial: 'NM',
    avatarColor: '#dbe1ff',
    textColor: '#004ac6',
    lastMessage: 'Cảm ơn ông nhé!',
    timeLabel: 'Hôm qua',
    isOnline: false,
  },
  {
    id: 'c3',
    name: 'Phạm Thị Long',
    initial: 'PT',
    avatarColor: '#fef3c7',
    textColor: '#b45309',
    lastMessage: 'Hiện tại thì ổn rồi đó. Để tối mình check...',
    timeLabel: 'T2',
    isOnline: false,
  },
]

export function getChatPreviews() {
  return MOCK_CHAT_PREVIEWS
}

export function getConversation(id) {
  return MOCK_CONVERSATIONS.find((conversation) => conversation.id === id) ?? null
}

export function getDefaultConversationId() {
  return MOCK_CONVERSATIONS[0]?.id ?? null
}

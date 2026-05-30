export function findFriends(query) {
  const normalized = query.trim().toLowerCase()

  if (!normalized) {
    return { users: [], total: 0 }
  }

  if (normalized.includes('tng') || normalized.includes('long')) {
    return {
      users: [
        {
          id: 'f1',
          username: 'tngo282999',
          initial: 'T',
          level: 'COPPER',
          avatarBg: '#dbe1ff',
          avatarColor: '#004ac6',
        },
        {
          id: 'f2',
          username: 'phatnguyentan2205',
          initial: 'P',
          level: 'COPPER',
          avatarBg: '#dbe1ff',
          avatarColor: '#004ac6',
        },
      ],
      total: 2,
    }
  }

  return { users: [], total: 0 }
}

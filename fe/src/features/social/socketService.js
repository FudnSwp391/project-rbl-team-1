export function createSocketConnection(token) {
  if (!token) return null
  // Wire WebSocket when backend is ready
  return { on: () => {}, off: () => {}, emit: () => {}, disconnect: () => {} }
}

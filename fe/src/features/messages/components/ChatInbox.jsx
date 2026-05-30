import ChatConversationPanel from './ChatConversationPanel'
import ChatListPanel from './ChatListPanel'

export default function ChatInbox() {
  return (
    <div className="messages-inbox">
      <ChatListPanel />
      <ChatConversationPanel />
    </div>
  )
}

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  conversations: [],
  activeConversationId: null,
  messages: [],
  loading: false,
  isFloatingOpen: false,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setConversations: (state, action) => {
      state.conversations = action.payload
    },
    setActiveConversation: (state, action) => {
      state.activeConversationId = action.payload
    },
    setMessages: (state, action) => {
      state.messages = action.payload
    },
    appendMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    openFloatingChat: (state) => {
      state.isFloatingOpen = true
    },
    closeFloatingChat: (state) => {
      state.isFloatingOpen = false
    },
    toggleFloatingChat: (state) => {
      state.isFloatingOpen = !state.isFloatingOpen
    },
  },
})

export const {
  setConversations,
  setActiveConversation,
  setMessages,
  appendMessage,
  openFloatingChat,
  closeFloatingChat,
  toggleFloatingChat,
} = chatSlice.actions
export default chatSlice.reducer

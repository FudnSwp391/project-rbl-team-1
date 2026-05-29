import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  conversations: [],
  activeConversationId: null,
  messages: [],
  loading: false,
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
  },
})

export const { setConversations, setActiveConversation, setMessages, appendMessage } =
  chatSlice.actions
export default chatSlice.reducer

const SEND_MESSAGE = "SEND_MESSAGE"

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

const initialState = {
  dialogs: [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'GitHub' },
    { id: 3, name: 'React' },
    { id: 4, name: 'Redux' },
    { id: 5, name: 'Google' },
    { id: 6, name: 'YouTube' },
  ],
  messages: [
    { id: 1, message: 'Hey, how are you? =)' },
    { id: 2, message: 'Hello world' },
    { id: 3, message: 'Hi' },
    { id: 4, message: 'bb gl hf' },
    { id: 5, message: 'cya' },
    { id: 6, message: 'you welcome' },
  ]
}

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE: 
      const body = action.newMessageBody
      return {
        ...state,
        messages: [...state.messages, { id: Date.now(), message: body }]
      }
    default: return state
  }
}

export default dialogsReducer
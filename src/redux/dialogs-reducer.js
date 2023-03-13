const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  messages : [
    {id:1, message: 'Hi'},
    {id:2, message: 'How are you?'},
    {id:3, message: 'Thanks'},
    {id:4, message: 'Go away!'},
    {id:5, message: 'LOL'},
    {id:6, message: 'See you soon'},
  ],
  newMessageBody: '',
  dialogs : [
    {id:1, name: 'Inna'},
    {id:2, name: 'Dmytro'},
    {id:3, name: 'Olha'},
    {id:4, name: 'Victor'},
    {id:5, name: 'Sasha'},
    {id:6, name: 'Yulia'},
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEND_MESSAGE: 
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages,{id:7, message: body}],
        newMessageBody: ''
      };
    case UPDATE_NEW_MESSAGE_BODY: 
      return {
        ...state,
        newMessageBody: action.body
      };
    default:
      return state;
  }
}
export const sendMessage = () => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;
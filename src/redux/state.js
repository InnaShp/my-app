const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state : {
    profilePage : {
      posts : [
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'It`s my first post', likesCount: 1},
        {id:3, message: 'I like to listen to the indie music', likesCount: 11},
        {id:4, message: 'Tired...', likesCount: 0},
      ],
      newPostText: '',
    },
    messagesPage: {
      messages : [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'Thanks'},
        {id:4, message: 'Go away!'},
        {id:5, message: 'LOL'},
        {id:6, message: 'See you soon'},
      ],
      newMessageText: '',
      dialogs : [
        {id:1, name: 'Inna'},
        {id:2, name: 'Dmytro'},
        {id:3, name: 'Olha'},
        {id:4, name: 'Victor'},
        {id:5, name: 'Sasha'},
        {id:6, name: 'Yulia'},
      ]
    }
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState () {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }, 
  
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText; 
        this._callSubscriber(this._state);
    }
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.messagesPage.newMessageText,
      }
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = '';
      this._callSubscriber(this._state);
    } 
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  } 
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})


export default store;
window.store = store;
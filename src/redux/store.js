import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
    dialogsPage: {
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
    },
    sideBar: {}
  },
  _callSubscriber() {
    
  },

  getState () {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }, 
  
  dispatch(action) { 
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;
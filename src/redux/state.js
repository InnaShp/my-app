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
  getState () {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.messagesPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {
    this._state.messagesPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}
export default store;
window.store = store;
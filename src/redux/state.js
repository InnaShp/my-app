let rerenderEntireTree = () => {

}

let state = {
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
}

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => { 
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.messagesPage.newMessageText,
  }
  state.messagesPage.messages.push(newMessage);
  state.messagesPage.newMessageText = '';
  rerenderEntireTree(state);
}
export const updateNewMessageText = (newText) => {
  state.messagesPage.newMessageText= newText;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;
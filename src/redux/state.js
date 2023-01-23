let state = {
  profilePage : {
    posts : [
      {id:1, message: 'Hi, how are you?', likesCount: 12},
      {id:2, message: 'It`s my first post', likesCount: 1},
      {id:3, message: 'I like to listen to the indie music', likesCount: 11},
      {id:4, message: 'Tired...', likesCount: 0},
    ]
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
export default state;
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET-USERS";

let initialState = {
  users : [
    {id:1, followed: false, fullName: 'Yulia', status: 'I love pasta 😍', location: {city:'Shepetivka', country:'Ukraine'}},
    {id:2, followed: true, fullName: 'Dmytro', status: 'I am studying 3D Max', location: {city:'Drogobych', country:'Ukraine'}},
    {id:3, followed: true, fullName: 'Inna', status: 'Thanks God I am not russian', location: {city:'Lviv', country:'Ukraine'}},
    {id:4, followed: false, fullName: 'Zlata', status: 'Happy😇', location: {city:'Kyiv', country:'Ukraine'}},
  ]
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed:true};
          }
          return u;
        })
      }
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed:false};
          }
          return u;
        })
      }
    case SET_USERS: 
      return {...state, users: [...state.users, ...action.users]}
    default: 
      return state;
  }
 
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default userReducer;
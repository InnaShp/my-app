import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
let mapStateToDispatch = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    } 
  }
}
let UsersContainer = connect(mapStateToProps, mapStateToDispatch)(Users)

export default UsersContainer;
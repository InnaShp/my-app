import axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom'

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component {...props} router={{location, navigate, params}} />
    )
  }
  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let profileId = this.props.router.params.userId;
    if (!profileId) {
      profileId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+profileId)
    .then(response => {
      this.props.setUserProfile(response.data);
      
    })
  } 
  render() {
    return (
        <Profile {...this.props} profile={this.props.profile} />
    );
    
  }
}
let mapStateToProps = (state) => ({profile: state.profilePage.profile})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));
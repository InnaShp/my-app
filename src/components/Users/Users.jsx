import React from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i=1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }
  return <div> 
    <div>
      {pages.map( p => {
        return <span className={props.currentPage === p && s.selectedPage}
        onClick={() => { props.onPageChanged(p) }}> {p} </span>
        
      })}
    </div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.userPhoto} /></div>
          <div>
            {u.followed 
            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 
            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            
          </div>
        </span>
        <span>
            <div>
              {u.name}
            </div>
            <div>
              {u.status}
            </div>
        </span>
      </div>)
    }
  </div>
}



export default Users;
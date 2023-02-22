import React from 'react';
import s from "./Users.module.css";


let Users = (props) => {
  // if (props.users.length === 0) {
  //   props.setUsers([
  //   {id:1, photoUrl: 'https://media.glamour.com/photos/622b89e9be100481dd9d5007/1:1/w_1439,h_1439,c_limit/haileybieber_266294307_1869439506583781_6391818773180029640_n.jpg', 
  //   followed: false, fullName: 'Yulia', status: 'I love pasta 😍', location: {city:'Shepetivka', country:'Ukraine'}},
  //   {id:2, photoUrl:'https://wikiofthrones.com/wp-content/uploads/2023/01/pedro-pascal-the-last-of-us.jpg', 
  //   followed: true, fullName: 'Dmytro', status: 'I am studying 3D Max', location: {city:'Drogobych', country:'Ukraine'}},
  //   {id:3, photoUrl:'https://www.instyle.com/thmb/V2U_-BsSWvr6kKSjtgkU6JjcyUg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/kylie-jenner-black-bra-instagram-social-6aa7c76df8e94fa9a2c2be11374756ce.jpg', 
  //   followed: true, fullName: 'Inna', status: 'Thanks God I am not russian', location: {city:'Lviv', country:'Ukraine'}},
  //   {id:4, photoUrl:'https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-rv-16248/cd5063e11f01c16ac3588652dc39e42f/featured-img-of-post-rv-16248.jpg?fm=jpg&fl=progressive&q=50&w=1200', 
  //   followed: false, fullName: 'Zlata', status: 'Happy😇', location: {city:'Kyiv', country:'Ukraine'}},
  //   ])
  // }
  
return <div>
  {
    props.users.map(u => <div key={u.id}>
      <span>
        <div><img src={u.photoUrl} alt="" className={s.userPhoto} /></div>
        <div>
          {u.followed 
          ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> 
          : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
          
        </div>
      </span>
      <span>
        <span>
          <div>
            {u.fullName}
          </div>
          <div>
            {u.status}
          </div>
        </span>
        <span>
          <div>
            {u.location.country}
          </div>
          <div>
            {u.location.city}
          </div>
        </span>
      </span>
    </div>)
  }
</div>
}

export default Users;
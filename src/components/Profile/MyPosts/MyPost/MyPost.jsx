import React from "react";
import s from "./MyPost.module.css";

const MyPost = (props) => {
  return (
    <div className={s.item}>
      <img src="https://images.pexels.com/photos/14211152/pexels-photo-14211152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Avatar" />
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
 
}

export default MyPost;
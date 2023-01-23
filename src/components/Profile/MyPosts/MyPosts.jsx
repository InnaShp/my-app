import React from "react";
import MyPost from "./MyPost/MyPost";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  
  let postElements = props.posts.map( p => <MyPost message={p.message} likesCount={p.likesCount} />)
  return (
    <div className={s.postsBlock}> 
      <div>
        <h3>My posts</h3> 
        <div >
          <div><textarea></textarea></div>
          <div><button>Add post</button></div>
        </div>
      </div>
      <div className={s.posts}>
        { postElements }
      </div>
    </div>
  );
 
}

export default MyPosts;
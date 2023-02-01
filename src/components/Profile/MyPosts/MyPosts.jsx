import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPost from "./MyPost/MyPost";
import s from "./MyPosts.module.css";



const MyPosts = (props) => {
  let postElements = props.posts.map( p => <MyPost message={p.message} likesCount={p.likesCount} />)
  
  let newPostElement = React.createRef(); 

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }
  let onPostChange = () => {
    let text =  newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  } 

  return (
    <div className={s.postsBlock}> 
      <div>
        <h3>My posts</h3> 
        <div >
          <div><textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} /></div>
          <div><button onClick={ addPost }>Add post</button></div>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
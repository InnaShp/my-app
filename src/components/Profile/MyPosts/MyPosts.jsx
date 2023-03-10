import React from "react";
import MyPost from "./MyPost/MyPost";
import s from "./MyPosts.module.css";


const MyPosts = (props) => {
  let postElements = props.posts.map( p => <MyPost message={p.message} key={p.id} likesCount={p.likesCount} />)
  
  let newPostElement = React.createRef(); 

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text =  newPostElement.current.value;
    props.updateNewPostText(text);
  } 
  
  return (
    <div className={s.postsBlock}> 
      <div>
        <h3>My posts</h3> 
        <div >
          <div><textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} /></div>
          <div><button onClick={ onAddPost }>Add post</button></div>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;
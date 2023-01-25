import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.state.messages.map( m => <Message message={m.message} />)
  
  let newMessage = React.createRef();
  let addMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <div><textarea ref={newMessage}></textarea></div>
        <div><button onClick={ addMessage }>Add message</button></div>
      </div>
      
    </div>
  );
 
}

export default Dialogs;
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {
  
  let dialogsElements = props.messagesPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
  let messagesElements = props.messagesPage.messages.map( m => <Message message={m.message} />)
  
  let newMessage = React.createRef();
  let addMessage = () => {
    props.addMessage();
  }
  let onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <div><textarea onChange={onMessageChange} ref={newMessage} value={props.messagesPage.newMessageText}></textarea></div>
        <div><button onClick={ addMessage }>Add message</button></div>
      </div>
      
    </div>
  );
 
}

export default Dialogs;
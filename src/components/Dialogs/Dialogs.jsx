import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />)
  let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id} />)
  let newMessageBody = props.dialogsPage.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        { dialogsElements }
      </div>
      <div className={s.messages}>
        { messagesElements }
        <div><textarea placeholder="Enter your message.." onChange={onNewMessageChange} value={newMessageBody}></textarea></div>
        <div><button onClick={ onSendMessageClick }>Send</button></div>
      </div>
      
    </div>
  );
 
}

export default Dialogs;
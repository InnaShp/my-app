import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}


reportWebVitals();

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

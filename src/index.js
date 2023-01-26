import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} 
        addPost={store.addPost.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)} 
        addMessage={store.addMessage.bind(store)} 
        updateNewMessageText={store.updateNewMessageText.bind(store)} />
      </BrowserRouter>
    </React.StrictMode>
  );
}


reportWebVitals();

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

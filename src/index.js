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
        dispatch={store.dispatch.bind(store)}  />
      </BrowserRouter>
    </React.StrictMode>
  );
}


reportWebVitals();

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

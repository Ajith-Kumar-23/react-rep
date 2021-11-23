import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { createStore } from "redux";
import { Provider } from "react-redux";

// Selector
const loginAlert='Get Started';

// Action
export const login = () =>({type: loginAlert})

// Reducer
const reducer = (state,actions) =>{
  switch(actions.type){
    case loginAlert:
      return state=alert("Login Successfull");
    default:
      return state="Login Failed";
      

  }
}

// Store
let store=createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

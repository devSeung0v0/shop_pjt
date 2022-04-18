import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


let defaultState = [
  {id:0, name: 'sandle',price: 15000, quan: 2},
  {id:1, name:'rain boots', price: 28000, quan:1}
]

const reducer = (state = defaultState, action)=>{
  if( action.type === 'itemPlus'){
    let copyState = [...state]
    copyState.push(action.payload)
    return copyState
  }
  else if(action.type === 'quanPlus'){
    let copyState = [...state]
    copyState[0].quan ++
    return copyState

  }else if(action.type === 'quanMinus'){
    let copyState = [...state]
    copyState[0].quan --
    
    if(copyState[0].quan < 0){
      copyState[0].quan = 0
    } 
    return copyState

  }else{
    return state
  }
 
}

let store = createStore(combineReducers({reducer}))



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

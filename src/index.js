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
    let found = state.findIndex((item)=>{return item.id === action.data.id})// findIndex : array 안에서 원하는 데이터 찾아주는 함수, 조건식이 맞으면 몇번째 인덱스에 있는지를 반환
    if(found >= 0){
      let copyState = [...state]
      copyState[found].quan ++
      return copyState
    } else {
      let copyState = [...state]
      copyState.push(action.data)
      return copyState
    }
  }
  else if(action.type === 'quanPlus'){
    let copyState = [...state]
    copyState[action.data].quan ++
    return copyState

  }else if(action.type === 'quanMinus'){
    let copyState = [...state]
    copyState[action.data].quan --
    
    if(copyState[action.data].quan < 0){
      copyState[action.data].quan = 0
    } 
    return copyState

  }
  else{
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

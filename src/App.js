
import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Data from './data'
import Product from './components/Product';
import MainBanner from './components/MainBanner';
import Header from './components/Header';
import Detail from './components/Detail';
import Cart from './components/Cart';
import axios from 'axios';

export let stockContext = React.createContext()

function App() {
  let [shoes,shoesCng] = useState(Data)
  let [stock,stockCng] = useState([10,11,12])
  
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/'>
      <MainBanner />
      <div className='container'>

        <stockContext.Provider value={stock}>
            <div className='row'>
              {
                shoes.map((item,idx)=>{
                  return  <Product shoes={shoes[idx]} idx={idx} key={idx}/>
                })
              }
              
            </div>
          </stockContext.Provider>
          <button className='btn btn-primary' onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              shoesCng([...shoes,...result.data])
            })
            .catch(()=>{

            })
          }}>View more</button>
      </div>
    </Route>
    <Route exact path='/cart'>
            <Cart />
          </Route>
    <Route exact path='/detail/:id'>
      <Detail shoes={shoes} stock={stock} stockCng={stockCng}/>
    </Route>
    
    </Switch>
    </div>
  );
}

export default App;

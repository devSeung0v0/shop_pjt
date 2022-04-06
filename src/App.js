
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Data from './data'
import Product from './components/Product';
import MainBanner from './components/MainBanner';
import Header from './components/Header';
import Detail from './components/Detail';

function App() {
  let [shoes,shoesCng] = useState(Data)
  
  return (
    <div className="App">
    <Header />
    <Switch>
    <Route exact path='/'>
    <MainBanner />
    <div className='container'>
        <div className='row'>
          {
            shoes.map((item,idx)=>{
              return  <Product shoes={shoes[idx]} idx={idx} key={idx}/>
            })
          }
          
        </div>
    </div>
    </Route>
    <Route exact path='/detail/:id'>
      <Detail shoes={shoes}/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;

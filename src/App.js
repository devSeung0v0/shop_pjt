import logo from './logo.svg';
import './App.css';
import {Navbar, Container,Nav,Carousel} from 'react-bootstrap'
import { useState } from 'react';
import Data from './data'
import Product from './product';

function App() {
  let [shoes,shoesCng] = useState(Data)
  
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">ShoePang</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/feet-gd9fd17cd0_1920.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>20% Season Off</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/work-boots-g9b0d1bf71_1920.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>20% Season Off</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/feet-g212f5c91e_1920.jpeg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>20% Season Off</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className='container'>
    <div className='row'>
      {
        shoes.map((item,idx)=>{
          return  <Product shoes={shoes[idx]} idx={idx} key={idx}/>
        })
      }
      
    </div>
</div>
    </div>
  );
}

export default App;

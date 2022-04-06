import React from 'react'
import {Navbar, Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header(){
  return(
    <>
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoePang</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  )
}



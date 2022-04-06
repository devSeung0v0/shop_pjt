import React from 'react'
import {Navbar, Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header(){
  return(
    <>
       <Navbar bg="light" variant="light">
        <Container>
          <Link to='/'>
          <Navbar.Brand href="#home">ShoePang</Navbar.Brand>
          </Link>
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



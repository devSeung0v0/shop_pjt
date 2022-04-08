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
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/detail'>Detail</Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  )
}



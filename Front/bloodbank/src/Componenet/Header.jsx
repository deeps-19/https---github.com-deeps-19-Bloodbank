import React from 'react'
import {Link} from 'react-router-dom'
import './body.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
  return (
    <div className='bg'>

<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blood Bank</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/patient">Patient</Nav.Link>
            <Nav.Link as={Link} to="/DonnerRegister">Donor</Nav.Link>
            <Nav.Link as={Link} to="/AdminDashboard">Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

 </div>
  )
}

export default Header

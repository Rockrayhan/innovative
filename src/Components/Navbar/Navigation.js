import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import innovativeLogo from '../../images/Innovative logo.png' ;

const Navigation = () => {
    return (
        <div>
         
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={innovativeLogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Innovative Health Care 
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default Navigation;
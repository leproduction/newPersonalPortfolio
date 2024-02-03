import React from 'react';
import { Navbar, Card, Nav, NavDropdown, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewImage from './Image';


export default function NavBarComponent() {

 
  return (
    <div>
      <Navbar  expand="sm" className="bg-light border border-secondary w-100 h-100 mx-auto">
      <Container >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      

    
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" className='bg-light border border-secondary rounded' id="basic-nav-dropdown">
              <NavDropdown.Item href="#">
              Home
              </NavDropdown.Item>
            
              <NavDropdown.Item href="#">
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
              Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Image 
        src={NewImage}
        thumbnail
        roundedCircle
        width="50"
        height="50"
        className='float-right'
        />
        <Navbar.Brand href="#home">Personal Portforlio</Navbar.Brand>
      </Container>
      
      
     
      </Navbar>
    </div>
  );
}





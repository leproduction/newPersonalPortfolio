import React, {useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Image, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewImage from './Image';



export default function NavBarComponent() {
  const [isHovered, setIsHovered] = useState(false);
  const [color, setColor] = useState('');


  const handleHover = () => {
    setIsHovered(true);
    setColor('bg-info');
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };




  return (
    <div>
      <Navbar style={{ background: "rgba(189,195,199, 0.2)" }} expand="sm" className="shadow rounded w-100 h-100 p-1 mx-0">
      <Container className='p-1 mx-0' >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />



        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto float-left mx-1 p-1">
            <NavDropdown title="Menu" className='bg-light border rounded ' id="basic-nav-dropdown" >
              <NavDropdown.Item href="#">
              Home
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="#footer">
                Contact
              </NavDropdown.Item>

              <NavDropdown.Item onMouseEnter={handleHover} className={`${color}`} onMouseLeave={handleUnhover}  href="https://drive.google.com/file/d/1gaDf1dJm21aydqX9qWDVh0EkQj4NmI13/view?usp=sharing" target='_blank' download>
            Resume </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Image
        src={NewImage}
        thumbnail
        roundedCircle
        width="50"
        height="50"
        className='mx-1'
        />
        <Navbar.Brand href="#home">Personal Portforlio</Navbar.Brand>
      </Container>



      </Navbar>
    </div>
  );
}





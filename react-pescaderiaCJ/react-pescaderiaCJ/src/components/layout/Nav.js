import React from "react";
import '../../styles/components/layout/Nav.css'


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">JACK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto"
            
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
            <Nav.Link href="/recetas">Recetas</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/novedades">Novedades</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            

            <NavDropdown title="Mas..." id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://www.instagram.com/p/CpWBi1rPlnV/?hl=es">Nuestras Recetas en Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Mas información.
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                -Capitan JACK-
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );


}

export default NavScrollExample;



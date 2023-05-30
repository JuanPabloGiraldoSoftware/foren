import "./Title.css"
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Navbar, Container, Nav, Button, Form, NavDropdown } from "react-bootstrap";
const navbar = {backdropFilter: 'blur(10px)'};
export const NavBar = () => {
  const [linksVisible, setLinksVisible] = useState(false);

  const toggleLinksVisibility = () => {
    setLinksVisible(!linksVisible);
  };

  return(
     
        <Navbar style={navbar} expand="lg" className={`bar ${linksVisible ? 'fade-in' : ''}`} >
          <Container fluid>
            <Navbar.Brand  href="#" style={{color:'white'}} >Foren</Navbar.Brand>
            <Navbar.Toggle  aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px'}}
                navbarScroll
              >
                <Nav.Link  className="nav-link" href="#action1" style={{color:'white'}}>Home</Nav.Link>
                <Nav.Link className="nav-link" href="#action2" style={{color:'white'}}>About</Nav.Link>
                <NavDropdown title="Proyects" id="navbarScrollingDropdown" style={{color:'white'}}>
                  <NavDropdown.Item href="#action3" >Juan</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Anderson
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Futuros proyectos
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="nav-link" href="#"  style={{color:'white'}}>
                  Contact
                </Nav.Link>
              </Nav>
              <Form className="d-flex" >
                <Form.Control 
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" style={{color:'white'}}>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     
         
    )
}
import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../template/stylingNavbar.css"

const NavbarComponent = () => {
  return (
    <>
      <Navbar className="bgnavbar" expand="lg" style={{ fontFamily : "Rubik, sans-serif" }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize : "25px"  }}>VodaPermadi</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto py-2"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" style={{ fontSize : "18px" }} >Home</Nav.Link>
              <Nav.Link href="/" style={{ fontSize : "18px" }}>About</Nav.Link>
              <Nav.Link href="/" style={{ fontSize : "18px" }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

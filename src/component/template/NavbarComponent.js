import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../template/stylingNavbar.css"

const NavbarComponent = () => {
  return (
    <>
      <Navbar className="bgnavbar fixed-top shadow" expand="lg" style={{ fontFamily : "Rubik, sans-serif" }}>
        <Container>
          <Navbar.Brand href="/" style={{ fontSize : "25px"  }} className="text-white" >VodaPermadi</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto py-2"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/portofolio/#home" className="text-white" style={{ fontSize : "18px" }} >Home</Nav.Link>
              <Nav.Link href="/portofolio/#about" className="text-white" style={{ fontSize : "18px" }}>About</Nav.Link>
              <Nav.Link href="/portofolio/#skill" className="text-white" style={{ fontSize : "18px" }}>Skill</Nav.Link>
              <Nav.Link href="/portofolio/#project" className="text-white" style={{ fontSize : "18px" }}>Project</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

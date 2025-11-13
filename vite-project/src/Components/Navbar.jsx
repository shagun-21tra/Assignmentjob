// import React from "react";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg ="White" fixed="top" >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#" className="fw-bold text-primary">
          Logo
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left side */}
          <Nav className="me-auto custom-dropdown">
  <NavDropdown
    title="CATEGORIES"
    id="custom-nav-dropdown"
    className="text-uppercase fw-semibold"
  >
    <div className="dropdown-3col d-flex">
      {/* Left column - Main categories */}
      <div className="dropdown-col main-cats">
        <ul className="list-unstyled mb-0">
          <li className="has-sub">
            <a href="#">Cooking</a>
            <ul className="sub-menu list-unstyled">
              <li><a href="#">All</a></li>
              <li><a href="#">Indian</a></li>
              <li><a href="#">Norwegian</a></li>
              <li><a href="#">Category 04</a></li>
            </ul>
          </li>

          <li className="has-sub"><a href="#">Language</a></li>
          <li className="has-sub"><a href="#">Music</a></li>
          <li className="has-sub"><a href="#">Arts & Craft</a></li>
          <li className="has-sub"><a href="#">Yoga</a></li>
          <li className="has-sub"><a href="#">Academic</a></li>
          <li className="has-sub"><a href="#">Back to Roots</a></li>
          <li className="has-sub"><a href="#">Funteresting</a></li>
        </ul>
      </div>

      {/* Right column - Quote blob */}
      <div className="dropdown-col quote-area text-center text-white">
        <div className="quote-container position-relative">
          <div className="blob-bg"></div>
          <div className="quote-text position-absolute top-50 start-50 translate-middle">
            <p className="fw-bold fs-5 mb-1">“Do anything, but let it produce joy.”</p>
            <small>– Walt Whitman</small>
          </div>
        </div>
      </div>
    </div>
  </NavDropdown>
</Nav>


          {/* Right side */}
          <Nav>
            <Nav.Link href="#teach" className="fw-semibold text-dark me-3 text-uppercase">
              Teach
            </Nav.Link>

            <Button variant="outline-primary" className="me-2 px-4 rounded-pill text-uppercase fw-semibold">
              Login
            </Button>

            <Button variant="outline-primary" className="px-4 rounded-pill text-uppercase fw-semibold">
              Signup
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

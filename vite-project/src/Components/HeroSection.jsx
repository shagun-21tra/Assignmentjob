import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import top_img from "../assets/top_img.png"; 
import floatingBtn from '../assets/flotingbtn.png';
// import" top_img" from "../assets
const HeroSection = () => {
  return (
    <section className="py-5 mt-5 hero-section position-relative">
      <Container>
        <Row className="align-items-center">
          {/* Left Side */}
          <Col md={6} className="text-center text-md-start">
            <h4 className="fw-bold text-primary mb-3">
              Hobbies <span className="text-danger">❤️</span> Happiness{" "}
              <span className="text-danger">💖</span> Home
            </h4>
            <p className="text-secondary mb-4">
              A Nordic startup which brings incredibly interesting hobbies
              from around the world to people of all ages.
            </p>

            {/* Input with Button */}
            <Form className="d-flex justify-content-center justify-content-md-start">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2 rounded-pill shadow-sm"
                style={{ maxWidth: "250px" }}
              />
              <Button
                variant="primary"
                className="rounded-pill px-4 fw-semibold text-uppercase"
              >
                Start Exploring
              </Button>
            </Form>
          </Col>

          {/* Right Side */}
          <Col md={6} className="text-center mt-4 mt-md-0 position-relative">
            <div className="shape-bg"></div>
            <img
              src={top_img}
              // src="https://img.freepik.com/free-photo/happy-family-using-laptop-home_23-2148748628.jpg"
              alt="family"
              className="img-fluid rounded-circle shadow position-relative"
              style={{ width: "40%", borderRadius: "50%" }}
            />

            {/* Floating Button (left side below image) */}
            <button 
            // className="floating-btn"
            >
              <img
                src={floatingBtn}
                // src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                alt="floating button"
                width="30"
              />
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;

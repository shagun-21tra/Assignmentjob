import React from "react";
import { Container, Row, Col, Card, Button, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturesAndClasses.css";
import  PaintBrushIcon from '../assets/Paint Brush.png';
import  icon2 from '../assets/icon2.png';
import  icon3 from '../assets/icon3.png';
import  icon4 from '../assets/icon4.png';   

const FeaturesAndClasses = () => {
  return (
    <section className="features-section py-5">
      <Container className="text-center">
        <h3 className="fw-bold text-primary mb-3">
          Explore. Enroll. Have Fun. Repeat – <br />
          <span className="text-dark">here hobby meets happiness</span>
        </h3>

       
        <Row className="mt-5 gy-4">
          <Col md={3} sm={6}>
            <img
            src ={PaintBrushIcon}
           
            alt="learn" width="60" />
            <h6 className="mt-3 fw-bold">Learn something new</h6>
            <p className="text-muted small">
              Explore your passion and go beyond the boundaries of time, age, or geography.
            </p>
          </Col>

          <Col md={3} sm={6}>
            <img
            src={icon2}
             alt="teacher" width="60" />
            <h6 className="mt-3 fw-bold">Skilled & Passionate Teachers</h6>
            <p className="text-muted small">
              We offer interactive classes by experts who are qualified and trusted.
            </p>
          </Col>

          <Col md={3} sm={6}>
            <img 
            src={icon3}
             alt="class" width="60" />
            <h6 className="mt-3 fw-bold">Take classes anytime, anywhere</h6>
            <p className="text-muted small">
              Join sessions at your convenience and pace from the comfort of your home.
            </p>
          </Col>

          <Col md={3} sm={6}>
            <img 
            src={icon4}
             alt="payment" width="60" />
            <h6 className="mt-3 fw-bold">Pay as you go</h6>
            <p className="text-muted small">
              No enrollment fees. Pay only for the classes you take securely with us.
            </p>
          </Col>
        </Row>
      </Container>

      
    </section>
  );
};

export default FeaturesAndClasses;

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import "./DiscoverClasses.css";
import discovre from '../assets/discovre.png';

const DiscoverClasses = () => {
  const [currency, setCurrency] = useState("NOK");

  const handleCurrencyChange = (val) => setCurrency(val);

  const classData = [
    {
      id: 1,
      category: "Language",
      title: "Class name – Lorem ipsum sit elit varsi lectus sit amet",
      teacher: "John Doe",
      rating: 4.7,
      priceINR: "₹1,499",
      priceNOK: "kr1000",
      oldPriceINR: "₹3,842",
      oldPriceNOK: "kr2400",
      img: discovre,
    
    },
    {
      id: 2,
      category: "Language",
      title: "Class name – Lorem ipsum sit elit varsi lectus sit amet",
      teacher: "John Doe",
      rating: 4.7,
      priceINR: "₹1,499",
      priceNOK: "kr1000",
      oldPriceINR: "₹3,842",
      oldPriceNOK: "kr2400",
      img: discovre,
    
    },
    {
      id: 3,
      category: "Language",
      title: "Class name – Lorem ipsum sit elit varsi lectus sit amet",
      teacher: "John Doe",
      rating: 4.7,
      priceINR: "₹1,499",
      priceNOK: "kr1000",
      oldPriceINR: "₹3,842",
      oldPriceNOK: "kr2400",
      img: discovre,
    
    },
    {
      id: 4,
      category: "Language",
      title: "Class name – Lorem ipsum sit elit varsi lectus sit amet",
      teacher: "John Doe",
      rating: 4.7,
      priceINR: "₹1,499",
      priceNOK: "kr1000",
      oldPriceINR: "₹3,842",
      oldPriceNOK: "kr2400",
      img: discovre,
  
    },
  ];

  return (
    <Container className="mt-5 discover-section">
     
      <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <div className ="text-start">
          <h4 className="fw-bold text-primary mb-1">Discover classes</h4>
          <p className="text-muted small mb-1">
            Choose from a variety of classes from around the world.
          </p>
        </div>

        <div className="d-flex align-items-center gap-3">
          {/* <span className="text-danger fw-semibold show-all">SHOW ALL</span> */}
          <div className="d-flex align-items-center">
            <span className="small text-muted me-2">Show prices in:</span>
            <ToggleButtonGroup
              type="radio"
              name="currency"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <ToggleButton
                id="tbg-btn-1"
                value="NOK"
                variant={currency === "NOK" ? "primary" : "light"}
                className="rounded-pill px-3 py-1 small"
              >
                NOK
              </ToggleButton>
              <ToggleButton
                id="tbg-btn-2"
                value="INR"
                variant={currency === "INR" ? "primary" : "light"}
                className="rounded-pill px-3 py-1 small"
              >
                INR
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </div>

      <Row className="gy-4">
        {classData.map((item) => (
          <Col md={3} sm={6} key={item.id}>
            <Card className="shadow-sm border-0 class-card">
              <div className="position-relative">
                <Card.Img variant="top" src={item.img} />
                <span className="discount-badge">60% OFF</span>
                <span className="bookmark-icon">🔖</span>
              </div>
              <Card.Body>
                <h6 className="text-uppercase text-primary small fw-bold">
                  {item.category}
                </h6>
                <h6 className="fw-bold mb-1 card-title-text">{item.title}</h6>
                <p className="text-muted small mb-1">
                  by{" "}
                  <span className="text-danger fw-semibold">
                    {item.teacher}
                  </span>{" "}
                  ⭐ {item.rating}
                </p>
                <p className="text-muted small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="fw-bold text-dark">
                      {currency === "INR" ? item.priceINR : item.priceNOK}
                    </span>{" "}
                    <del className="text-muted small">
                      {currency === "INR"
                        ? item.oldPriceINR
                        : item.oldPriceNOK}
                    </del>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    className="rounded-pill px-3 enroll-btn"
                  >
                    Enroll now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DiscoverClasses;

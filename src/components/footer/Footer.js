import React from 'react';
import { Col, Container, Row ,Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
    return (
        <div className="bg-dark pt-4">
<Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8}>
      <h4 className="text-light fw-bolder">Online HealthCare </h4>
    </Col>
    <Col xs={6} md={4}>
     <p>  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="text-light">sign up to receive the latest articles</Form.Label>
    <Form.Control type="email" placeholder="Your Email" />
  </Form.Group></p>
     <Button className="mb-2 mb-sm-2" variant="outline-info">Login</Button>{' '}
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row className="text-light">
    <Col xs={6} md={4} className="mb-4">
     <Link to="/home"> <Button variant="outline-primary">Home</Button>{' '}</Link>
     <Link to="/services"> <Button variant="outline-success">Services</Button>{' '}</Link>
     <Link to="/about">  <Button variant="outline-light">About</Button>{' '} </Link>
     <Link to="/contract">  <Button className="mt-2" variant="outline-secondary">Contract Us</Button> </Link>
    </Col>
    <Col xs={6} md={4}>
      
    </Col>
      <hr />
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row className="text-white mt-3 pb-2">
    <Col xs={6}>
     <h6> Copyright &copy; 2021 ak Online HealthCare. All rights reserved</h6>
    </Col>
    <Col xs={6} className="icon">
    <a href="#@"><i class="fab fa-facebook-square text-white mt-3 me-2"></i></a>
      <a href="#@"><i class="fab fa-instagram text-success mt-3 me-2"></i></a>
      <a href="#@"><i class="fab fa-twitter-square text-info me-2"></i></a>
      <a href="#@"><i class="fab fa-google-plus-square text-danger"></i></a>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Footer;
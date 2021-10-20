import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
  const { users, logOut } = useAuth();
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h4>Online <span className="text-warning">HealthCare</span></h4></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contractus">Contract Us</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {users?.displayName ?
              <Button onClick={logOut} variant="outline-success">logout</Button> :
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }
            <Navbar.Text>
              Log in as: <a href="#login">{users?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;
import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, handleNameChanged,
        handlePassword, handleRegistration, toggoleLogin, isLogin } = useAuth();
    return (
        <div className="mb-4 App">

            <Form onSubmit={handleRegistration} >
                <h1 className="fw-bold text-info">Please {isLogin ? "Login" : "Registered"}</h1>
                {!isLogin &&<Col>
                  <Form.Label className="fw-bold">Name</Form.Label>
                    <Form.Control className="mb-3 w-50 mx-auto" placeholder="First name" />
                </Col>}
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control onBlur={handleNameChanged} type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    <Form.Check onChange={toggoleLogin} className="mt-2" type="checkbox" label="Already Registerd?" />
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    {isLogin ? "Login" : "Registered"}
                </Button>
            </Form>

            <div className="mt-3">
                <Button onClick={signInUsingGoogle} variant="outline-primary">Google login</Button>{' '}
                <p> <Link to="/register">New User?</Link></p>
            </div>
        </div>
    );
};

export default Login;
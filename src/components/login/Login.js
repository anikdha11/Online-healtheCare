import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle} = useAuth();
    return (
        <div className="mb-4 App">
            <h1>Please Login</h1>
            <Form >
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label className="fw-bold">Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label className="fw-bold">Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="light border border-dark" type="submit">
                    Login
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
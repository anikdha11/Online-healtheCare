import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';





const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="mb-4">
            <h1>Please Login</h1>
            <Button onClick={signInUsingGoogle} variant="outline-primary">Google login</Button>{' '}
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { handleNameChanged,
        handlePassword,handleRegistration } = useAuth();
    return (
        <div className="mt-4">
               <form onSubmit={handleRegistration} action="">
            <div>
            <input onBlur={handleNameChanged} type="email" placeholder="your email" />
            </div>
            <div className="mt-2">
            <input onBlur={handlePassword} type="password" placeholder="your password" />
            </div>
           <input type="submit" value="Submit"  />
         </form>
         
         <Link to="/login"> Already Registered?</Link>
        </div>
    );
};

export default Register;
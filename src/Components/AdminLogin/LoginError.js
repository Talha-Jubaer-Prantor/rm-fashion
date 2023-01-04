import React from 'react';
import { Link } from 'react-router-dom';

const LoginError = () => {
    return (
        <div>
            <Link to={"/adminlogin"} className='btn btn-success'>Try Again</Link>
            
        </div>
    );
};

export default LoginError;
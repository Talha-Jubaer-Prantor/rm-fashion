import React from 'react';
import { Link } from 'react-router-dom';
import "./LoginError.css"

const LoginError = () => {
    return (
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <Link to={"/adminlogin"} className='btn btn-success'>Try Again</Link>
            
        </div>
    );
};

export default LoginError;
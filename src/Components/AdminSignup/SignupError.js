import React from 'react';
import { Link } from 'react-router-dom';

const SomethingWrong = () => {
    return (
        <div>

            <Link to={"/adminsignup"} className='btn btn-success'>Try Again</Link>
            
        </div>
    );
};

export default SomethingWrong;
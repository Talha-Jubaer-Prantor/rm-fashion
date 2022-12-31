import React from 'react';
import "./NewestProduct.css"

const NewestProduct = () => {
    return (
        <div className='newProduct'>
            <br /><br />
            <h1 style={{textAlign:"center"}}> Newest Product </h1>
            <br /><br />
        <div className='new-product-box'>
            <div className='box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_n7et99-37WAxGIT4En9EPoWMk4s_zFmdQ&usqp=CAU" alt="" />
                <h3>T-shirt</h3>
                <span>Price</span>
            </div>
            
            <div className='box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_n7et99-37WAxGIT4En9EPoWMk4s_zFmdQ&usqp=CAU" alt="" />
                <h3>T-shirt</h3>
                <span>Price</span>
            </div>

            <div className='box'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs_n7et99-37WAxGIT4En9EPoWMk4s_zFmdQ&usqp=CAU" alt="" />
                <h3>T-shirt</h3>
                <span>Price</span>
            </div>


        </div>

            
        </div>
    );
};

export default NewestProduct;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Store.css"

const Store = () => {
    const products = [
        {
          name: "name",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlJpj99zGvhqI1NbJnW5UsupNXtUtmfYxCQ&usqp=CAU",
          price: 100,
        },
        {
          name: "name",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlJpj99zGvhqI1NbJnW5UsupNXtUtmfYxCQ&usqp=CAU",
          price: 100,
        },
        {
          name: "name",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlJpj99zGvhqI1NbJnW5UsupNXtUtmfYxCQ&usqp=CAU",
          price: 100,
        },
        {
          name: "name",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlJpj99zGvhqI1NbJnW5UsupNXtUtmfYxCQ&usqp=CAU",
          price: 100,
        },
        {
          name: "name",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlJpj99zGvhqI1NbJnW5UsupNXtUtmfYxCQ&usqp=CAU",
          price: 100,
        },
        {
          name: "name",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlJpj99zGvhqI1NbJnW5UsupNXtUtmfYxCQ&usqp=CAU",
          price: 100,
        },
      ];
    return (
        <div>
            <Navbar></Navbar>
            <br /><br />
            <h3 className='container'>Shop</h3>
            <br />

            <div className='shop-product'>
            {products.map((product) => (
            <div className="feature-product-box">
              <img src={product.img} alt="haha" />
              <h3>{product.name}</h3>
              <h5>{product.price}BDT</h5>
            </div>
          ))}
            </div>



        </div>
    );
};

export default Store;
import React from "react";
import "./FeatureProduct.css";

const FeatureProduct = () => {
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
    <div className="feature-product">
      <br /><br />
      <h1 style={{textAlign:"center"}}>Feature Product</h1>
      <br /><br />

      <div className="feature-product-box-container">
          {products.map((product) => (
            <div className="feature-product-box">
              <img src={product.img} alt="haha" />
              <h3>{product.name}</h3>
              <h5>{product.price}BDT</h5>
            </div>
          ))}
      </div>
      <br /><br />
      <h4 style={{textAlign:"center"}}>
        <a href="/store" style={{textDecoration:"none",color:"black",border:"2px solid black",borderRadius:"15px",padding:'5px'}} >Visit Store</a>
      </h4>

    </div>
  );
};

export default FeatureProduct;

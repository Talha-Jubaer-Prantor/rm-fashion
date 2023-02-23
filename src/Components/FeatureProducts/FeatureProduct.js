import React, { useEffect, useState } from "react";
import "./FeatureProduct.css";

const FeatureProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://rm-fashion-backend.vercel.app/fetureproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="feature-product">
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Feature Product</h1>
      <br />
      <br />

      <div className="feature-product-box-container">
        {products.map((product) => (
          <div className="feature-product-box">
            <img
              src={product.img}
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
            <h3>{product.name}</h3>
            <h5>{product.price}BDT</h5>
          </div>
        ))}
      </div>
      <br />
      <br />
      <h4 style={{ textAlign: "center" }}>
        <a
          href="/store"
          style={{
            textDecoration: "none",
            color: "black",
            border: "2px solid black",
            borderRadius: "15px",
            padding: "5px",
          }}
        >
          Visit Store
        </a>
      </h4>
    </div>
  );
};

export default FeatureProduct;

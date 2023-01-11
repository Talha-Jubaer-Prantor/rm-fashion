import React, { useEffect, useState } from "react";
import "./NewestProduct.css";

const NewestProduct = () => {
  const [newproducts, setNewProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/newproduct"
    )
      .then((res) => res.json())
      .then((data) => setNewProduct(data));
  });

  return (
    <div className="newProduct">
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}> Newest Product </h1>
      <br />
      <br />
      <div className="new-product-box">
        {newproducts.map((newproduct) => (
          <div className="box">
            <img
              style={{ height: "200px", width: "200px" }}
              src={newproduct.img}
              alt=""
            />
            <h3>T-shirt</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewestProduct;

import React, { useEffect, useState } from "react";

const NewProductDelete = () => {
  const [newProducts, setNewProduct] = useState([]);

  useEffect(() => {
    fetch("https://rm-fashion-backend.vercel.app/newproduct")
      .then((res) => res.json())
      .then((data) => setNewProduct(data));
  }, []);

  const deleteNewProduct = (e) => {
    // e.prventDefault()
    console.log(e);
    fetch("https://rm-fashion-backend.vercel.app/deletenewproduct", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ path: e }),
    }).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
    console.log(e);
  };

  return (
    <div className="container">
      <div>
        <h1> New Product </h1>
        <div className="deleteImg-container" style={{ minHeight: "200px" }}>
          {newProducts.map((newProduct) => (
            <div key={newProduct.img} className="deleteImg">
              <img
                src={newProduct.img}
                style={{ height: "100px", width: "250px" }}
                alt=""
              />
              <br />
              <br />
              <button
                onClick={() => deleteNewProduct(newProduct._id)}
                className="btn btn-danger"
              >
                {" "}
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProductDelete;

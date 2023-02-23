import React, { useState } from "react";

const FetureProduct = () => {
  // View Feture Product

  const [viewFetureProd, setViewFetureProd] = useState("");
  const handleViewFeatureProd = (e) => {
    const img = e.target.value;
    setViewFetureProd(img);
  };

  // Feture Product Upload

  const handleFetureProduct = (e) => {
    e.preventDefault();

    const img = e.target.image.value;
    const price = e.target.price.value;
    const Name = e.target.name.value;

    fetch("https://rm-fashion-backend.vercel.app/fetureproductpost", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ img: img, name: Name, price: price }),
    }).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <br />
      <br />
      <h3>Feture Product</h3>
      <form
        onSubmit={handleFetureProduct}
        id="fetureForm"
        style={{ textAlign: "center" }}
      >
        <span style={{ fontSize: "20px" }}> Image </span>
        <br />
        <input type="text" name="image" onChange={handleViewFeatureProd} />{" "}
        <br />
        <br />
        <span style={{ fontSize: "20px" }}> Name </span>
        <br />
        <input type="text" name="name" />
        <br />
        <br />
        <span style={{ fontSize: "20px" }}> Price </span>
        <br />
        <input type="number" name="price" />
        <br />
        <br />
        <button className="btn btn-success">Submit</button>
      </form>
      <br />
      <img
          style={{ height: "100px", width: "200px" }}
          src={
            viewFetureProd
              ? viewFetureProd
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFVI771jkfWHKbUCEOWlrK3CbTbt-0x_c_A&usqp=CAU"
          }
          alt=""
        />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default FetureProduct;

import axios from "axios";
import React from "react";

const FetureProduct = () => {
  const handleFetureProduct = (e) => {
    e.preventDefault();

    const form = document.getElementById("fetureForm");

    const formData = new FormData(form);

    axios
      .post(
        "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/fetureproductpost",
        formData
      )
      .then((res) => {
        if (res.data === true) {
          window.location.reload();
        }
      });
  };

  return (
    <div>
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
        <input type="file" name="image" /> <br />
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
    </div>
  );
};

export default FetureProduct;

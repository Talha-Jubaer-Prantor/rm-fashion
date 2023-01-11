import axios from "axios";
import { useEffect, useState } from "react";
import "./NewestProduct.css";

const NewestProduct = () => {
  // Newest Product handler
  const handleNewestProduct = (e) => {
    e.preventDefault();

    const form = document.getElementById("form");

    console.log(form);
    let formData = new FormData(form);

    axios
      .post(
        "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/newproductpost",
        formData
      )
      .then((res) => {
        if (res) {
          // window.location.reload();
        }
      });
  };

  const [newproduct, setNewProduct] = useState({});

  useEffect(() => {
    fetch(
      "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/newproduct"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 3) {
          setNewProduct(true);
        } else {
          setNewProduct(false);
        }
      });
  });

  return (
    <div>
      <br />
      <br />
      <h3>Newest Product</h3>
      <br />
      <form
        onSubmit={handleNewestProduct}
        id="form"
        style={{ textAlign: "center" }}
      >
        <span style={{ fontSize: "20px" }}> Image </span>
        <br />
        <input type="file" name="image" /> <br />
        <span style={{ fontSize: "20px" }}> Name </span>
        <br />
        <input type="text" name="name" />
        <br />
        <br />
        {newproduct ? (
          <button className="btn btn-danger" disabled>
            First Delete A Photo
          </button>
        ) : (
          <button className="btn btn-success">Submit</button>
        )}
      </form>
    </div>
  );
};

export default NewestProduct;

import { useEffect, useState } from "react";
import "./NewestProduct.css";

const NewestProduct = () => {
  // handle View Image

  const [viewNewImg, setViewNewImg] = useState("");
  const viewNewProd = (e) => {
    const img = e.target.value;

    setViewNewImg(img);
  };

  // Newest Product handler
  const handleNewestProduct = (e) => {
    e.preventDefault();

    const img = e.target.image.value;
    const Name = e.target.name.value;

    console.log(img, Name);

    fetch("https://rm-fashion-backend.vercel.app/newproductpost", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ img: img, name: Name }),
    }).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  const [newproduct, setNewProduct] = useState({});

  useEffect(() => {
    fetch("https://rm-fashion-backend.vercel.app/newproduct")
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
    <div style={{ textAlign: "center" }}>
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
        <input type="text" name="image" onChange={viewNewProd} /> <br />
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
      <br />
      

      <img
          style={{ height: "100px", width: "200px" }}
          src={
            viewNewImg
              ? viewNewImg
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFVI771jkfWHKbUCEOWlrK3CbTbt-0x_c_A&usqp=CAU"
          }
          alt=""
        />

      <br />
    </div>
  );
};

export default NewestProduct;

import React, { useState } from "react";

const SliderImg = () => {
  // handaleing img preview
  const [viewImg, setViewImg] = useState();

  const handleViewImg = (e) => {
    const img = e.target.value;
    setViewImg(img);
    console.log(img);
  };

  // Posting img to database

  const handleImg = (e) => {
    e.preventDefault();
    const img = e.target.image.value;

    fetch("https://rm-fashion-backend.vercel.app/sliderimgpost", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ img: img }),
    }).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  const [img, setImg] = useState({});

  fetch("https://rm-fashion-backend.vercel.app/sliderimg")
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 3) {
        setImg(true);
      } else setImg(false);
    });
  console.log(setImg);

  return (
    <div>
      <br />
      <br />
      <h3>Slider Image</h3>
      <br />

      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleImg}>
          <span style={{ fontSize: "20px" }}>Image </span>
          <input
            type="text"
            name="image"
            onChange={handleViewImg}
            placeholder="link"
          />
          {img ? (
            <button className="btn btn-danger" type="submit" disabled>
              {" "}
              First delete an image
            </button>
          ) : (
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          )}
          <br />
          <br />
        </form>
        
        <img
          style={{ height: "100px", width: "200px" }}
          src={
            viewImg
              ? viewImg
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFVI771jkfWHKbUCEOWlrK3CbTbt-0x_c_A&usqp=CAU"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default SliderImg;

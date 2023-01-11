import React, { useState } from "react";

const SliderImg = () => {
  const handleImg = (e) => {
    e.preventDefault();
    const file = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", file);
    fetch(
      "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/sliderimgpost",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => {
      if (res) {
        window.location.reload();
      }
    });
  };

  const [img1, setImg1] = useState({});

  fetch(
    "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/sliderimg"
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 3) {
        setImg1(true);
      } else setImg1(false);
    });

  return (
    <div>
      <br />
      <br />
      <h3>Slider Image</h3>
      <br />

      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleImg}>
          <span style={{ fontSize: "20px" }}>Image </span>
          <input type="file" name="image" />
          {img1 ? (
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
      </div>
    </div>
  );
};

export default SliderImg;

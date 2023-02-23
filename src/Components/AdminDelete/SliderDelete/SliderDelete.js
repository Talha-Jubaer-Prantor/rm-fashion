import React, { useEffect, useState } from "react";
import "./SliderDelete.css";

const SliderDelete = () => {
  const [sliderImgs, setSliderImg] = useState([]);

  useEffect(() => {
    fetch("https://rm-fashion-backend.vercel.app/sliderimg")
      .then((res) => res.json())
      .then((data) => setSliderImg(data));
  }, []);

  // Slider delete handler
  const deleteSlider = (e) => {
    fetch("https://rm-fashion-backend.vercel.app/deleteslider", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ id: e }),
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
        <h1> Slider Images </h1>
        <div className="deleteImg-container" style={{ minHeight: "200px" }}>
          {sliderImgs.map((sliderImg) => (
            <div key={sliderImg.img} className="deleteImg">
              <img
                src={sliderImg.img}
                style={{ height: "100px", width: "250px" }}
                alt=""
              />
              <br />
              <br />
              <button
                onClick={() => deleteSlider(sliderImg._id)}
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

export default SliderDelete;

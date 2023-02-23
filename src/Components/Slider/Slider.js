import React, { useEffect, useState } from "react";
import "./Slider.css";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  const [sliderImgs, setSliderImg] = useState([]);

  useEffect(() => {
    fetch("https://rm-fashion-backend.vercel.app/sliderimg")
      .then((res) => res.json())
      .then((data) => setSliderImg(data));
  }, []);

  console.log(sliderImgs);

  return (
    <div>
      <Carousel variant="dark container">
        {sliderImgs.map((sliderImg) => (
          <Carousel.Item>
            <img
              style={{ height: "450px" }}
              className="d-block w-100"
              src={sliderImg.img}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;

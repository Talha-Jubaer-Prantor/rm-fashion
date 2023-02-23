import React, { useEffect, useState } from "react";

const FetureProductDelete = () => {
  const [fetures, setFetures] = useState([]);

  useEffect(() => {
    fetch("https://rm-fashion-backend.vercel.app/fetureproduct")
      .then((res) => res.json())
      .then((data) => setFetures(data));
  }, []);

  const deleteFeature = (e) => {
    fetch("https://rm-fashion-backend.vercel.app/deletefeture", {
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
  };

  return (
    <div className="container">
      <div>
        <h1> Feture Product </h1>
        <div className="fetureImg-container deleteImg-container" style={{ minHeight: "200px" }}>
          {fetures.map((feture) => (
            <div key={feture.img} className="deleteImg">
              <img
                src={feture.img}
                style={{ height: "100px", width: "250px" }}
                alt=""
              />
              <br />
              <br />
              <button
                onClick={() => deleteFeature(feture._id)}
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

export default FetureProductDelete;

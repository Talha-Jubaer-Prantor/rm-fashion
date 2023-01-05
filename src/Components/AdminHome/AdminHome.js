import React from "react";
import { Link } from "react-router-dom";
import "./AdminHome.css";

const AdminHome = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };

  const user = localStorage.getItem("user");
  if (!user) {
    window.location.replace("/adminlogin");
  }

//   Slider handler
  const handleSlider=()=>{

  }

// Newest Product handler
  const handleNewestProduct=()=>{

  }

  return (
    <div>
      <div className="admin-nav container">
        <span>
          <h3>Control Panel</h3>
        </span>
        <span>
          <Link onClick={handleLogout} className="btn btn-danger">
            LogOut
          </Link>
        </span>
      </div>

      <div className="container">
        <form>
          <br /><br />
          <h3>Slider Image</h3><br />

          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "20px" }}>Image-1 </span><input type="file" name="img1" /><br />
            <span style={{ fontSize: "20px" }}>Image-2 </span><input type="file" name="img2" /><br />
            <span style={{ fontSize: "20px" }}>Image-3 </span><input type="file" name="img3" /><br />
          </div><br />
            <button className="btn btn-success" onClick={handleSlider}>Submit</button>
        </form>


        <form>
          <br /><br />
          <h3>Newest Product</h3><br />

          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "20px" }}>Image-1 </span><input type="file" name="img1" /><br />
            <span style={{ fontSize: "20px" }}>Image-2 </span><input type="file" name="img2" /><br />
            <span style={{ fontSize: "20px" }}>Image-3 </span><input type="file" name="img3" /><br />
          </div><br />
            <button className="btn btn-success" onClick={handleNewestProduct}>Submit</button>
        </form>
      

        <form>
          <br /><br />
          <h3>Feature Product</h3><br />

          <div style={{ textAlign: "center" }}>
            <h4>Name</h4><input type="text" />
            <h4>Price</h4><input type="number" /><br /><br />
            <h4 style={{ fontSize: "20px" }}>Image </h4><input type="file" name="img1" /><br />
          </div><br />
            <button className="btn btn-success" onClick={handleNewestProduct}>Submit</button>
        </form>

      </div>
    </div>
  );
};

export default AdminHome;

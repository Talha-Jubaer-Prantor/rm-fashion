import React from "react";
import { Link } from "react-router-dom";
import AdminDeleteBar from "../../AdminDeleteBar/AdminDeleteBar";
import FetureProductDelete from "../FetureProductDelete/FetureProductDelete";
import NewProductDelete from "../NewProductDelete/NewProductDelete";
import SliderDelete from "../SliderDelete/SliderDelete";

const AdminHomeDelete = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };

  const user = localStorage.getItem("user");
  if (!user) {
    window.location.replace("/adminlogin");
  }
  return (
    <div className="container">
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

      <AdminDeleteBar></AdminDeleteBar>
      <SliderDelete></SliderDelete>
      <NewProductDelete></NewProductDelete>
      <FetureProductDelete></FetureProductDelete>
    </div>
  );
};

export default AdminHomeDelete;

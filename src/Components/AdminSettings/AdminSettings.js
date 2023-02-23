import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminDeleteBar from "../AdminDeleteBar/AdminDeleteBar";
import "./AdminSettings.css";

const AdminSettings = () => {
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };

  const user = localStorage.getItem("user");
  if (!user) {
    window.location.replace("/adminlogin");
  }
  console.log(user);

  // Password Updat function

  const [notMatch, setNotMatch] = useState("");
  const [passUpdate, setPassUpdate] = useState("");

  const handleUpdatePass = (e) => {
    e.preventDefault();

    const oldPass = e.target.oldPass.value;
    const newPass = e.target.newPass.value;
    const newPass2 = e.target.newPass2.value;

    if (newPass === newPass2) {
      fetch("https://rm-fashion-backend.vercel.app/updatepass", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ newpass: newPass, oldpass: oldPass }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === true) {
            console.log(data);
            const update = (
              <h3 style={{ color: "Green", alignItems: "center" }}>
                Password Updated Successfully
              </h3>
            );
            setPassUpdate(update);
          }
        });
    } else {
      const notMatch = (
        <div style={{ color: "red" }}>Password Doesn't Match</div>
      );
      setNotMatch(notMatch);
    }
  };
  console.log(passUpdate);

  return (
    <div className="container">
      <div className="admin-nav ">
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

      {/* Update Password */}

      <br />
      <br />
      {passUpdate}
      <form onSubmit={handleUpdatePass} className="update-form">
        <h1>Update Password</h1>
        <br />
        <h5>Enter old Password</h5>
        <input
          type="password"
          name="oldPass"
          placeholder="Enter Old Password"
        />
        <br />
        <br />
        <h5>Enter new Password</h5>
        <input type="password" name="newPass" placeholder="New Password" />
        <br />
        <br />
        <h5>Enter new Password again</h5>
        <input type="password" name="newPass2" placeholder="New Password" />
        {notMatch}
        <br />
        <br />
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;

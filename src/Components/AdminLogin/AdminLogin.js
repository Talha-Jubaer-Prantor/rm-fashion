import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminLogin.css";

const AdminLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const data = localStorage.getItem("user");
  if (data) {
    window.location.replace("/adminhome");
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const email = e.target.email.value;

    const loginData = {
      email: email,
      password: password,
    };
    setIsLoading(true);
    await fetch(
      "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/loginuser",
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(loginData),
      }
    )

      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data === true) {
          localStorage.setItem("user", JSON.stringify(loginData));
          window.location.replace("/adminHome");
        } else {
          window.location.replace("/loginerror");
          console.log(data);
        }
      });
    // const data=localStorage.getItem("user")
    // console.log(data.email)
    // console.log(isLoading);
  };

  return (
    <div>
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-box">
          <h1>Login</h1>
          <br />
          <br />
          <h4>Email</h4>
          <input type="text" name="email" id="" />
          <br />
          <br />
          <h4>Password</h4>
          <input type="text" name="password" id="" />
          <br />
          <br />

          {isLoading ? "" : <button className="btn btn-success">Login</button>}
          <br />
          <p>
            Don't have any account <Link to="/adminsignup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

import React from "react";
import { Link } from "react-router-dom";
import "./AdminSignup.css";

const AdminSignup = () => {
  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password1 = e.target.password1.value;
    const password2 = e.target.password2.value;

    if (password1 === password2) {
      const password = password1;

      const signUpData = {
        name: name,
        email: email,
        password: password,
      };

      fetch(
        "https://rm-fashion-backend-au65inysf-talha-jubaer-prantor.vercel.app/createuser",
        {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(signUpData),
        }
      )

        .then((res) => res.json())
        .then((data) => {
          if (data === true) {
            window.location.replace("/adminlogin");
          }
          // else if(data.limited==="limited"){
          // }
          else {
            window.location.replace("/signuperror");
          }
        });
    }
  };

  return (
    <div>
      <div className="signup-container">
        <form onSubmit={handleSignup} className="signup-box">
          <h1>SignUp</h1>
          <br />
          <br />
          <h4>Name</h4>
          <input type="text" name="name" id="" required />
          <br />
          <br />
          <h4>Email</h4>
          <input type="text" name="email" id="" required />
          <br />
          <br />
          <h4>Password</h4>
          <input type="text" name="password1" id="" required />
          <br />
          <br />
          <h4>Retype Password</h4>
          <input type="text" name="password2" id="" required />
          <br />
          <br />

          {/* <h4 style={{display:{display}}}>Maximum admin account reached</h4> */}

          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
          <br />
          <br />
          <p>
            Already have an account? <Link to="/adminlogin">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminSignup;

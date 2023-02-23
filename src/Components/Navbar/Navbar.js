import React from 'react';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div >   

<nav className="navbar navbar-expand-lg navbar-light container" style={{backgroundColor:"#e9e9e9"}}>
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav content">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/shop">Visit Store</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>


        </div>
    );
};

export default Navbar;


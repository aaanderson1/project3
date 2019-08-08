//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper container">
        <a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      </nav>
    );
  }
}

export default Navbar;
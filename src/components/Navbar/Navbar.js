//sets up the reusable Navbar component
import "./Navbar.css";
import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { Navbar, NavItem } from "react-materialize";



function Navbarrender() {
  return (
<Navbar brand={<a />} alignLinks="right" className="navbarcolor">
  <img src="https://i.pinimg.com/originals/07/01/f1/0701f12ac1a67dbdd05d524d8d3b5a31.png" className="navbarlogo" height="100px" width="100px"></img>
<NavItem href="">
Create a Party
</NavItem>
<NavItem href="components.html">
I'm a Guest
</NavItem>
</Navbar>
  );
}

export default Navbarrender;





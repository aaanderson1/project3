import React from 'react';
import logo from './partylogo.png'; // Tell Webpack this JS file uses this image

console.log(logo);

function Logo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}

export default Logo;
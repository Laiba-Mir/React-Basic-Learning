import React from "react";

const Header = () => {
  return (
    <>
      <nav id="navbar">
        <div id="logo">
          <img src="ne.jpeg" alt="MobilePhones.com" />
        </div>
        <ul>
          <li className="items">
            {" "}
            <a href="#">Home</a>{" "}
          </li>
          <li className="items">
            {" "}
            <a href="#">Services</a>{" "}
          </li>
          <li className="items">
            {" "}
            <a href="#">About Us</a>{" "}
          </li>
          <li className="items">
            {" "}
            <a href="#">Contact Us</a>{" "}
          </li>
        </ul>
      </nav>
      <div id="home">
        <h1>Smart Phones</h1>
        <p>The Place where you can find your dream mobiles</p>
      </div>
    </>
  );
};

export default Header;

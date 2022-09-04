import React from "react";
import Logo from "../../public/assets/vector2.png";
import "../styles/styles.css";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <h1>
          <img src={Logo}></img>
        </h1>
      </nav>
    </div>
  );
};

export default Navbar;

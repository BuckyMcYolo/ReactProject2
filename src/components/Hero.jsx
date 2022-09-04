import React from "react";
import heroimg from "../../public/assets/Group-77.png";
import "../styles/styles.css";

const Hero = () => {
  return (
    <div>
      <p className="hero">
        <img src={heroimg} alt="images" />
      </p>
      <h1 className="online">Online Expieriences </h1>
      <p className="exp">
        Join unique interactive activities led by one-of-a-kind hosts all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;

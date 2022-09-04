import React from "react";
import star from "../../public/assets/Star-1.png";
import "../styles/styles.css";

const Card = (props) => {
  return (
    <div className="card">
      {props.elem.openSpots === 0 ? (
        <div className="card--badge">Sold Out</div>
      ) : (
        <div className="card--badge">Available: {props.elem.openSpots}</div>
      )}
      <img src={props.elem.coverImg} className="card--image" />
      <div className="card--stats">
        <span className="gray">
          {" "}
          {props.elem.stats.rating}
          <img src={star} alt="star" /> ({props.elem.stats.reviews}){" "}
          {props.elem.location}
        </span>
      </div>{" "}
      <p className="review">{props.elem.title}</p>
      <p className="card--price">
        <span className="bold"> {props.elem.price} $</span> / person
      </p>
    </div>
  );
};

export default Card;

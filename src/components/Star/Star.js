import React from "react";
import "../Star/Star.scss";
import StarActive from "../../assets/img/starcolor.png";
import StarInactive from "../../assets/img/stargrise.png";

const Star = ({ rating }) => {
  const ratingNumber = Number(rating);

  return (
    <div className="star">
      {[...Array(5)].map((_, index) => (
        <span key={index}>{index < ratingNumber ? <img src={StarActive} alt="Étoile pleine" /> : <img src={StarInactive} alt="Étoile vide" />}</span>
      ))}
    </div>
  );
};

export default Star;

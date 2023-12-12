import "./Card.scss";

import React from "react";

const Card = ({ logement }) => {
  console.log(logement);
  return (
    <div className="card">
      <img src={logement.cover} alt={logement.title} />
      <div className="title-overlay">
        <h4 className="title-logement">{logement.title}</h4>
      </div>
    </div>
  );
};

export default Card;

//les cards de locations récupèrent les couvertures et titres en props depuis Home

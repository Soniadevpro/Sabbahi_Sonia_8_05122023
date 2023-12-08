import "./Card.scss";

import React from "react";

const Card = ({ logement }) => {
  console.log(logement);
  return (
    <div className="card">
      {/* <img src={logement.cover} alt={logement.title} /> */}
      {/* <h2>{logement.title}</h2> */}
      {/* <p>{logement.description}</p> */}
      <p className="title">Titre de la location</p>
    </div>
  );
};

export default Card;

//les cards de locations récupèrent les couvertures et titres en props depuis Home

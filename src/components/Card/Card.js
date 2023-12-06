import "./Card.scss";

import React from "react";

const Card = ({ logement }) => {
  return (
    <div className="card">
      <img src={logement.pictures} alt={logement.title} />
      <h2>{logement.title}</h2>
      {/* <p>{logement.description}</p> */}
    </div>
  );
};

export default Card;

//les cards de locations récupèrent les couvertures et titres en props depuis Home

import "./Card.scss"; // Importation des styles spécifiques pour le composant Card

import React from "react";

// Composant Card qui affiche des informations sur un logement
const Card = ({ logement }) => {
  console.log(logement); // Affiche les informations du logement dans la console pour le débogage

  return (
    // Conteneur principal du composant Card
    <div className="card">
      {/* Image du logement.
          L'URL de l'image et le titre sont récupérés des propriétés du logement */}
      <img src={logement.cover} alt={logement.title} />

      {/* Overlay du titre sur l'image du logement */}
      <div className="title-overlay">
        {/* Titre du logement.
            Affiché dans un élément h4 pour mettre en évidence le nom du logement */}
        <h4 className="title-logement">{logement.title}</h4>
      </div>
    </div>
  );
};

export default Card; // Exportation du composant Card pour utilisation ailleurs dans l'application

//les cards de locations récupèrent les couvertures et titres en props depuis Home

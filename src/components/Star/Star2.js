import React from "react";
import "../Star/Star.scss";
// Définition du composant fonctionnel 'Star', qui prend 'rating' comme prop.
const StarMedia = ({ rating }) => {
  // Convertit la valeur de 'rating' en un nombre. Cela est nécessaire car 'rating'
  // pourrait être passé en tant que chaîne de caractères.
  const ratingNumber = Number(rating);

  return (
    // Un conteneur div avec la classe 'star', qui englobe l'ensemble des étoiles.
    <div className="starmedia">
      {
        // Création d'un tableau de 5 éléments pour représenter les étoiles.
        // La méthode 'map' est utilisée pour itérer sur ce tableau.
        [...Array(5)].map((_, index) => (
          // Pour chaque élément du tableau, une balise span est créée.
          // 'key' est un attribut unique requis par React pour les listes rendues.
          <span
            key={index}
            // La classe 'filled' est appliquée aux étoiles dont l'index est
            // inférieur à la valeur de 'ratingNumber'. Cela signifie que si
            // 'ratingNumber' est 3, les trois premières étoiles auront la classe 'filled'.
            className={index < ratingNumber ? "filled" : ""}
          ></span>
        ))
      }
    </div>
  );
};

// Exportation du composant pour qu'il puisse être utilisé dans d'autres parties de l'application.
export default StarMedia;

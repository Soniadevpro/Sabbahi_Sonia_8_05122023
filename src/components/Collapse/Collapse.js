import React, { useState } from "react"; // Importation de React et du hook useState
import "../Collapse/Collapse.scss"; // Importation des styles pour le composant Collapse
import arrow from "../../assets/img/arrowback.png"; // Importation de l'image de la flèche pour le bouton

// Composant Collapse pour afficher des contenus repliables
const Collapse = ({ title, content }) => {
  const [rotate, setRotate] = useState(false); // État pour gérer la rotation de la flèche et l'affichage du contenu

  return (
    // Conteneur principal du composant Collapse
    <div className="collapse">
      {/* Boîte de titre cliquable qui contrôle l'affichage du contenu */}
      <div className="boxTitle">
        <h3 className="titleCollapse" onClick={() => setRotate(!rotate)}>
          {title} {/* Titre du contenu repliable */}
          {/* Image de la flèche qui change de direction en fonction de l'état 'rotate' */}
          <img className={rotate ? "arrow arrow_down" : "arrow arrow_up"} src={arrow} alt="voir texte" />
        </h3>
      </div>
      {/* Contenu qui s'affiche ou se cache en fonction de l'état 'rotate' */}
      <div className={rotate ? "unerolled" : "unerolled_hidden"}>
        <div className="textContent">
          {/* Affichage du contenu. Si c'est un tableau, chaque élément est rendu dans un paragraphe */}
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>; // Chaque élément du tableau est rendu comme un paragraphe
              })
            : content}
        </div>
      </div>
    </div>
  );
};

export default Collapse; // Exportation du composant Collapse pour utilisation dans d'autres parties de l'application

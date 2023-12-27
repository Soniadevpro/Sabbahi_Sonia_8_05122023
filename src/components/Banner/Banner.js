import React from "react";

// Composant Banner qui affiche une image de bannière et du texte
const Banner = ({ bannerImage, text }) => {
  return (
    // Conteneur principal du composant Banner
    <div className="banner">
      {/* Image de la bannière. 
          `bannerImage` est l'URL de l'image passée en tant que prop */}
      <img src={bannerImage} alt="Banner"></img>

      {/* Texte de la bannière.
          Le texte est passé en tant que prop et affiché dans un paragraphe */}
      <p className="textImg">{text}</p>
    </div>
  );
};

export default Banner;

import React from "react"; // Importation de React

// Composant Tag pour afficher une étiquette (label)
const Tag = ({ label }) => {
  return (
    // Conteneur principal du composant Tag
    <div>
      {/* Affichage de l'étiquette.
          Le contenu de l'étiquette est déterminé par la prop `label` */}
      <div className="tag">{label}</div>
    </div>
  );
};

export default Tag; // Exportation du composant Tag pour utilisation dans d'autres parties de l'application

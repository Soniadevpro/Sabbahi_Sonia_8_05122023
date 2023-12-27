import React from "react"; // Importation de React

import "../404/Error.scss"; // Importation des styles spécifiques pour la page d'erreur
import { Link } from "react-router-dom"; // Importation de Link de react-router-dom pour la navigation

// Composant Error pour afficher une page d'erreur 404
const Error = () => {
  return (
    // Conteneur principal du composant Error
    <div>
      <div className="error404">
        {/* Titre affichant le code d'erreur 404 */}
        <h1>404</h1>

        {/* Message indiquant que la page demandée n'existe pas */}
        <h2>Oups! La page que vous demandez n'existe pas</h2>

        {/* Lien pour retourner à la page d'accueil */}
        <Link to="/">Retournez sur la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Error; // Exportation du composant Error pour utilisation dans d'autres parties de l'application

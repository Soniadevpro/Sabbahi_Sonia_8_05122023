import React from "react"; // Importation de React
import Logo from "../../assets/img/LOGO1.png"; // Importation du logo à utiliser dans le footer

// Composant Footer pour le pied de page de l'application
const Footer = () => {
  return (
    // Conteneur principal du footer
    <footer className="footer-content">
      {/* Logo de l'entreprise */}
      <img src={Logo} alt="logo"></img>

      {/* Texte de droit d'auteur */}
      <p className="footer-text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer; // Exportation du composant Footer pour utilisation dans d'autres parties de l'application

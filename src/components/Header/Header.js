import Logo from "../../assets/img/LOGO.png"; // Importation du logo

import { NavLink } from "react-router-dom"; // Importation de NavLink de react-router-dom pour la navigation

// Fonction Header qui crée l'en-tête de l'application
function Header() {
  return (
    // Conteneur principal de l'en-tête
    <header className="header">
      <div className="navigation">
        {/* Logo de l'application */}
        <img src={Logo} alt="logo"></img>

        {/* Liste de navigation avec des liens */}
        <ul>
          {/* NavLink vers la page d'accueil */}
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>

          {/* NavLink vers la page 'À propos' */}
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header; // Exportation du composant Header pour utilisation dans d'autres parties de l'application

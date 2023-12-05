import Logo from "../../assets/img/LOGO.png";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="navigation">
        <img src={Logo} alt="logo"></img>
        <ul>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
          </NavLink>

          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
export default Header;

import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../404/Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Header />
      <div className="error404">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <Link to="/">Retournez sur la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error;

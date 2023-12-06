import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../Home/logements.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Logement = () => {
  const { id } = useParams(); //récupéré l'id de l'url
  // Utilisez l'id pour trouver le logement correspondant dans votre tableau de logements
  const logement = logementsData.find((logement) => logement.id === parseInt(id));
  //   if (!logement) {
  //     return <Redirect to="/erreur404" />;
  //   }
  return (
    <div>
      <Header />
      {logement && (
        <>
          <h2>{logement.title}</h2>
          <p>{logement.description}</p>
          <img src={logement.cover} alt={logement.title} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Logement;

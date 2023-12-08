import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../Home/logements.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Caroussel from "../../components/Caroussel/Caroussel";
import Tag from "../../components/Tag/Tag";
import Star from "../../components/Star/Star";

const Logement = () => {
  const { id } = useParams();
  console.log(id);
  console.log(logementsData); //récupéré l'id de l'url
  // Utilisez l'id pour trouver le logement correspondant dans votre tableau de logements
  const logement = logementsData.find((logement) => logement.id === id);
  console.log(logement);
  //   if (!logement) {
  //     return <Redirect to="/erreur404" />;
  //   }
  return (
    <div>
      {logement && (
        <>
          <Caroussel slides={logement.pictures} />
          <h2>{logement.title}</h2>
          <p>{logement.description}</p>
          <Star rating={logement.rating} />
          {logement.tags.map((tag, index) => (
            <Tag key={index} label={tag} />
          ))}
        </>
      )}
    </div>
  );
};

export default Logement;

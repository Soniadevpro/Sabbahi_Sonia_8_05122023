import React from "react";
import { useParams } from "react-router-dom";
import logementsData from "../Home/logements.json";
import "../Logement/Logement.scss";
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
          <div className="logement-container">
            <h2 className="logement-title">{logement.title}</h2>
            <p className="host">{logement.host.name}</p>
            <img src={logement.host.picture} alt={`Photo de l'hôte ${logement.host.name}`} />
            <p className="logement-location">{logement.location}</p>
            <Star rating={Number(logement.rating)} />
            {logement.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Logement;

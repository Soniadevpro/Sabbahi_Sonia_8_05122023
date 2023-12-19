import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../Home/logements.json";
import "../Logement/Logement.scss";
import Caroussel from "../../components/Caroussel/Caroussel";
import Tag from "../../components/Tag/Tag";
import Star from "../../components/Star/Star";
import Collapse from "../../components/Collapse/Collapse";
import StarMedia from "../../components/Star/Star2";

const Logement = () => {
  const { id } = useParams();
  console.log(id);
  console.log(logementsData); //récupéré l'id de l'url
  // Utilisez l'id pour trouver le logement correspondant dans votre tableau de logements
  const logement = logementsData.find((logement) => logement.id === id);
  console.log(logement);

  const navigate = useNavigate(); // Créez une instance de navigate

  const logementred = logementsData.find((logement) => logement.id === id);

  useEffect(() => {
    if (!logementred) {
      navigate("/erreur404"); // Redirigez vers /erreur404 si aucun logement n'est trouvé
    }
  }, [logement, navigate]);
  return (
    <div className="logement-global">
      {logement && (
        <>
          <Caroussel slides={logement.pictures} />
          <div className="logement-container">
            <section className="box-first">
              <h2 className="logement-title">
                {logement.title}
                <p className="logement-location">{logement.location}</p>
              </h2>
              <StarMedia rating={Number(logement.rating)} />
              <p className="host">
                {logement.host.name}
                <img src={logement.host.picture} alt={`Photo de l'hôte ${logement.host.name}`} />
              </p>
            </section>

            <section className="box-second">
              <div className="tag-content">
                {logement.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <Star rating={Number(logement.rating)} />
            </section>

            <section className="box-third">
              <Collapse title="Description" content={logement.description} />
              <Collapse
                title="Équipements"
                content={logement.equipments.map((equipment, index) => (
                  <p key={index}>{equipment}</p>
                ))}
              />
              {/* <Collapse title="Équipements" content={logement.equipments.join(", ")} /> */}
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Logement;

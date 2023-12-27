import React, { useEffect } from "react"; // Importation de React et du hook useEffect
import { useParams, useNavigate } from "react-router-dom"; // Importation de hooks pour la navigation et l'accès aux paramètres d'URL
import logementsData from "../Home/logements.json"; // Importation des données des logements depuis un fichier JSON
import "../Logement/Logement.scss"; // Importation des styles spécifiques pour la page de logement
import Caroussel from "../../components/Caroussel/Caroussel"; // Importation du composant Caroussel
import Tag from "../../components/Tag/Tag"; // Importation du composant Tag
import Star from "../../components/Star/Star"; // Importation du composant Star pour l'affichage des étoiles
import Collapse from "../../components/Collapse/Collapse"; // Importation du composant Collapse
import StarMedia from "../../components/Star/Star2"; // Importation d'une variante du composant Star

// Composant Logement pour afficher les détails d'un logement spécifique
const Logement = () => {
  const { id } = useParams(); // Récupération de l'ID du logement depuis l'URL
  console.log(id); // Affichage de l'ID pour le débogage
  console.log(logementsData); // Affichage des données des logements pour le débogage

  // Trouver le logement correspondant à l'ID dans les données
  const logement = logementsData.find((logement) => logement.id === id);
  console.log(logement); // Affichage du logement trouvé pour le débogage

  const navigate = useNavigate(); // Création d'une instance de navigate pour la redirection

  // Vérification si le logement existe
  useEffect(() => {
    if (!logement) {
      navigate("/erreur404"); // Redirection vers la page d'erreur 404 si le logement n'est pas trouvé
    }
  }, [logement, navigate]);

  return (
    <div className="logement-global">
      {/* Affichage conditionnel du contenu si le logement est trouvé */}
      {logement && (
        <>
          {/* Carrousel d'images du logement */}
          <Caroussel slides={logement.pictures} />

          {/* Conteneur principal des informations du logement */}
          <div className="logement-container">
            {/* Titre, location et information de l'hôte */}
            <section className="box-first">
              <h2 className="logement-title">
                {logement.title}
                <p className="logement-location">{logement.location}</p>
              </h2>
              <p className="host">
                {logement.host.name}
                <img src={logement.host.picture} alt={`${logement.host.name}`} />
              </p>
            </section>

            {/* Affichage des étoiles et informations de l'hôte */}
            <div className="media">
              <StarMedia rating={Number(logement.rating)} />
              <p className="host">
                {logement.host.name}
                <img src={logement.host.picture} alt={`${logement.host.name}`} />
              </p>
            </div>

            {/* Tags et évaluation du logement */}
            <section className="box-second">
              <div className="tag-content">
                {logement.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <Star rating={Number(logement.rating)} />
            </section>

            {/* Description et équipements du logement */}
            <section className="box-third">
              <Collapse title="Description" content={logement.description} />
              <Collapse
                title="Équipements"
                content={logement.equipments.map((equipment, index) => (
                  <p key={index}>{equipment}</p>
                ))}
              />
            </section>
          </div>
        </>
      )}
    </div>
  );
};

export default Logement; // Exportation du composant Logement pour utilisation dans d'autres parties de l'application

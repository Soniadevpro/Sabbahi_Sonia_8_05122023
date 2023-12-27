import Banner from "../../components/Banner/Banner"; // Importation du composant Banner
import MyBanner from "../../assets/img/banner-1.png"; // Importation de l'image pour la bannière
import Card from "../../components/Card/Card"; // Importation du composant Card
import logementsData from "./logements.json"; // Importation des données de logements depuis un fichier JSON
import { Link } from "react-router-dom"; // Importation de Link de react-router-dom pour la navigation

// Composant Home pour la page d'accueil
const Home = () => {
  return (
    // Conteneur principal de la page d'accueil
    <div>
      {/* Bannière en haut de la page avec une image et du texte */}
      <Banner bannerImage={MyBanner} text="Chez vous, partout et ailleurs" />

      {/* Section principale de la page d'accueil */}
      <div className="background">
        {/* Itération sur les données de logements pour créer un lien et une carte pour chaque logement */}
        {logementsData.map((logement) => (
          // Lien vers la page détaillée du logement
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            {/* Carte représentant chaque logement */}
            <Card key={logement.id} logement={logement} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home; // Exportation du composant Home pour utilisation dans d'autres parties de l'application

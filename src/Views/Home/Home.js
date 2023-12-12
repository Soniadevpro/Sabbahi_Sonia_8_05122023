// import axios from "axios"; //importer axios
import Banner from "../../components/Banner/Banner";
import MyBanner from "../../assets/img/banner-1.png";
import Card from "../../components/Card/Card";
import logementsData from "./logements.json";
import { Link } from "react-router-dom";
const Home = () => {
  // const [logements, setLogements] = useState([]);

  // useEffect(() => {
  //   setLogements(logementsData);
  // }, []); //dépendance vide pour éxecuter la requête une seule fois.

  // // Utilisez slice pour obtenir les 6 premiers logements
  // const firstSixLogements = logements.slice(0, 6);
  return (
    <div>
      <Banner bannerImage={MyBanner} text="Chez vous, partout et ailleurs" />
      <div className="background">
        {logementsData.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Card key={logement.id} logement={logement} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import MyBanner from "../../assets/img/banner-1.png";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/data/logements.json").then((res) => setData(res.data)); //requête axios API
  }, []);
  console.log(axios);
  return (
    <div>
      <Header />
      <Banner bannerImage={MyBanner} />
      <div className="background">
        {data.map((logement, id) => (
          <div className="cardlog" key={id}>
            <Link className="linkCard" to={`/logement/${logement.id}`}>
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;

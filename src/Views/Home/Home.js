import React from "react";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import MyBanner from "../../assets/img/banner-1.png";

import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner bannerImage={MyBanner} />
      <div className="background"></div>

      <Footer />
    </div>
  );
};

export default Home;

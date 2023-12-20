import React from "react";

const Banner = ({ bannerImage, text }) => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className={text}></img>
      <p className="textImg">{text}</p> {/* Utilisation de la propriété text ici */}
    </div>
  );
};

export default Banner;

import React from "react";

const Banner = ({ bannerImage }) => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner"></img>
      <div className="textImg">
        Chez vous,<br></br> partout et ailleurs
      </div>
    </div>
  );
};

export default Banner;

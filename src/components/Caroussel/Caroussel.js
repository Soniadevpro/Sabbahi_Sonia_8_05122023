import React from "react";

const Caroussel = ({ slide }) => {
  return (
    <div>
      <div className="slide">
        {" "}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Caroussel;

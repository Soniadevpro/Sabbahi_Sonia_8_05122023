import React from "react";

const Caroussel = ({ slides }) => {
  if (slides.length === 1) {
    return (
      <div className="slider">
        <img src={slides[0]} alt="Image 1" />
      </div>
    );
  }

  return (
    <div>
      <div className="slide">
        {" "}
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Caroussel;

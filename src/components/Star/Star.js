import React from "react";
import StarImg from "../../assets/img/_Rate.png";
const Star = ({ rating }) => {
  return (
    <div>
      <div className="star">
        {" "}
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "filled" : ""}>
            {" "}
            <img src={StarImg} alt="" />{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Star;

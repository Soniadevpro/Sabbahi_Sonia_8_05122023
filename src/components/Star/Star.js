import React from "react";

const Star = ({ rating }) => {
  return (
    <div>
      <div className="star">
        {" "}
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "filled" : ""}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Star;

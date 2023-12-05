import React, { useState } from "react";
import "../Collapse/Collapse.scss";
import arrow from "../../assets/img/arrowback.png";

const Collapse = ({ title, content }) => {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="collapse">
      <div className="boxTitle">
        <h3 className="titleCollapse" onClick={() => setRotate(!rotate)}>
          {title}
          <img className={rotate ? "arrow arrow_down" : "arrow arrow_up"} src={arrow} alt="voir texte" />
        </h3>
      </div>
      <div className={rotate ? "unerolled" : "unerolled_hidden"}>
        <div className="textContent">
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>;
              })
            : content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;

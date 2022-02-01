import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className="dark-bg">
      <div className={`card ${props.className}`} style={props.style}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import Buton from "../buton/Buton";
import "./Card.css";

const Card = ({ fagbøker, btn, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <h1 style={{ fontSize: "55px", border: "5px solid", width: "50rem", cursor: "pointer" }}>{fagbøker}</h1>
      <img
        style={{
          cursor: "pointer",
          transition: "transform 0.5s ease-out",
          transform: isHovered ? "scale(1.1)" : "scale(1)", // Apply the hover effect conditionally
        }}
        src={img}
        alt="image"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      />
      <h2>{btn}</h2>
      <Buton />
    </div>
  );
};

export default Card;

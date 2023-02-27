import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Solicita acceso anticipado para comenzar</h4>
        <h1 className="gradient__text">
          Las posibilidades están <br /> más allá de tu imaginación
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          incidunt mollitia non asperiores minus, vitae illo explicabo numquam,
          qui, eius voluptatibus! Magnam nemo ab nisi vitae eaque similique
          dolores cum?
        </p>
        <h4>Solicita acceso anticipado para comenzar</h4>
      </div>
    </div>
  );
};

export default Possibility;

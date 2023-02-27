import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorumLorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum",
  },
  {
    title: "animi ducimus voluptates labore",
    text: "animi ducimus voluptates labore facere soluta quidem porro ratione eiusanimi ducimus voluptates labore facere soluta quidem porro ratione eius",
  },
  {
    title: "facilis iste officia eaque, perferendis",
    text: "facilis iste officia eaque, perferendis praesentium reprehenderit vitae. facilis iste officia eaque, perferendis praesentium reprehenderit vitae",
  },
  {
    title: "Lorem ipsum dolor sit amet, consec",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        El futuro es ahora y sólo debes aceptarlo. Adéntrate en éste mundo y haz
        que suceda
      </h1>
      <p>Solicita acceso anticipado para comenzar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatgpt3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="Qué es GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          excepturi aliquam, aperiam molestias illum suscipit pariatur natus id
          molestiae odio placeat quos minus aliquid dolorem dolor eligendi!
          Consequuntur, voluptatibus libero!"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          Las posibilidades van más allá de la imaginación
        </h1>
        <p>Explora la librería</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          excepturi aliquam"
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          excepturi aliquam"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          excepturi aliquam"
        />
      </div>
    </div>
  );
};

export default WhatGPT3;

import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Construye cosas geniales con Inteligencia Artificial
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem id
          ducimus, alias velit et repellat autem distinctio veniam. Culpa saepe
          corporis ducimus minima aliquid? Expedita voluptatem rerum sequi
          voluptates. Optio.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Ingresa tu correo" />
          <button type="button">Comienza</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1.600 personas solicitaron acceso en las últimas 24hrs</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;

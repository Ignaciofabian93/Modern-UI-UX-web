import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
        Quieres ser parte del futuro antes que los demás?
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Solicita acceso anticipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>Todos los derechos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Redes sociales</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Compañía</h4>
        <p>Términos & Condiciones </p>
        <p>Política de privacidad</p>
        <p>Contacto</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Contáctanos</h4>
        <p>+56 13256756</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. Todos los derechos reservados.</p>
    </div>
  </div>
);

export default Footer;

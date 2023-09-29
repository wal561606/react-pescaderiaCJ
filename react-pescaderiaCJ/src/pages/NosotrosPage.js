import React from "react";
import "../styles/components/pages/NosotrosPages.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NosotrosPage = (props) => {
  return (
    <Container className="contenedor">
      <Row>
        <Col>
          <div className="historia">
            <h1>Historia</h1>
            <h5>
              "Nuestra historia es la esencia de un negocio familiar que se fue
              arraigando en la comunidad de Rafaela, Santa Fe. Desde hace
              generaciones, nos dedicamos apasionadamente al mundo de la pesca.
              Con orgullo, operamos dos pescaderías que se han convertido en
              pilares de la ciudad. Nuestro compromiso con la frescura y calidad
              es innegociable; cada producto que ofrecemos refleja nuestro amor
              por el rio, el mar y sus exquisitas variedades.
            </h5>
            <h5>
              Lo que nos distingue es nuestra profunda conexión con la pesca
              deportiva. Todo nuestro equipo comparte esta pasión, lo que nos
              brinda un entendimiento incomparable de los productos que
              ofrecemos. Sabemos dónde y cómo se capturan, y esto se traduce en
              una experiencia de compra única para nuestros clientes. Nuestros
              conocimientos sobre las distintas especies y sus preparaciones son
              inigualables; estamos aquí para ofrecerte asesoramiento experto y
              recetas que resaltarán los sabores naturales del pescado.
            </h5>
            <h5>
              Es un honor para nosotros seguir sirviendo a la comunidad de
              Rafaela, compartiendo nuestra tradición y pasión. ¡Esperamos verte
              pronto en nuestras pescaderías y ser parte de tu experiencia
              culinaria!"
            </h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="staff">
            <h1>Nuestro Equipo</h1>
            <div className="persona">
              <div className="image-container">
                <img
                  src="images/images/nosotros/nosotros1.jpg"
                  alt="Juan Gomez"
                />
              </div>
              <h3>Nuestro staff</h3>
              <h4>Nuestra familia</h4>
              <h5 class="texto_tarjeta">
                "En nuestra pescadería, el equipo está compuesto por los cinco
                miembros de nuestra familia, cada uno de nosotros aporta su
                dedicación y experiencia en cada aspecto del negocio.
                Compartimos una pasión profunda por la pesca deportiva, lo que
                nos permite seleccionar con minuciosidad los productos más
                frescos y sabrosos para nuestros clientes. Esto nos permite
                ofrecer un servicio personalizado y una experiencia de compra
                memorable para todos los amantes de la buena comida y la pesca."
              </h5>
            </div>
          </div>
        </Col>
        
      </Row>
      <Row>
        <Col>
        <a class="no-subrayado" href="https://maps.app.goo.gl/LYoeG6atntWKmWjb9" target="_blank" rel="noreferrer">
          <div>
            <h1>Sucrusal 1:</h1>
            <div className="persona">
              <div className="image-container">
                <img
                  src="images/local1.jpg"
                  alt="Imagen local uno"
                  className="image-shadow"
                />
              </div>
              <h3>Remedios de Escalada 1175</h3>
              <h4>Rafaela</h4>
              <h5 class="texto_tarjeta">
                Nuestra primer sucursal, el inicio de un sueño que se ha
                convertido en realidad y actualmente abastece de nuestros
                productos a gran parte de la comunidad rafaelina. Está ubicada en la zona Noreste de la ciudad.
              </h5>
            </div>
          </div>
          </a>
        </Col>
        <Col>
        <a class="no-subrayado" href="https://maps.app.goo.gl/pQbyKrxnjtP3TsCA6" target="_blank" rel="noreferrer">
          <div>
            <h1>Sucursal 2:</h1>
            <div className="persona">
              <div className="image-container">
                <img src="images/local2.jpg" alt="Imagen local dos" />
              </div>
              <h3>Presidente Roca 3550</h3>
              <h4>Rafaela</h4>
              <h5 class="texto_tarjeta">
                ¡Nos expandimos! Nuestra segunda sucursal continúa con la misma
                calidad de productos y atención, hemos seleccionado otro punto
                estratégico en la ciudad, siempre buscando la comodidad para
                nuestros clientes.
              </h5>
            </div>
          </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default NosotrosPage;

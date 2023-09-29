import React from "react";
import '../styles/components/pages/NovedadesPage.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NovedadesPage = (props) => {
    return (
        <Container className="contenedor">
            
        <Row>
          <Col>
        <section>
            <h2>Novedades</h2>
            <h3>Pescaderias Capitan Jack</h3>
            <h4>Rafaela</h4>
            <p>
            Aquí compartiremos novedades, sorteos, promociones y más.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </section>
        </Col>
        </Row>
        
        
        </Container>
    );
}

export default NovedadesPage;
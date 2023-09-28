import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { ImWhatsapp } from 'react-icons/im';

import '../../styles/components/pages/ProductoItem.css';

const ProductoItem = (props) => {
  const { key, name, price, image, description } = props;
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <section className='seccionproductos'>
      <Row xs={1} md={0} className="g-6">
        <Col key={key}>
          <Card className="tarjetaproducto-hija" onClick={handleShow}>
            <Card.Img
              variant="top"
              src={image}
              style={{ aspect_ratio: "1.0", height: 150, crop: "fit"}}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text className="price-text" style={{ color: "#1e5594" }}>{`$${price}`}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contactar a Capitán Jack</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Puedes hacerlo a través de:</p>
          <p> Whatsapp
          <a href='https://api.whatsapp.com/send?phone=3492317823' target="_blank" rel="noreferrer">
               <i class='whatIcon'><ImWhatsapp/></i>
          </a>
          </p>
          <p>
            O llámanos al: <a class='whatIcon' href="tel:3492317823">3492317823</a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Cerrar
          </button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default ProductoItem;



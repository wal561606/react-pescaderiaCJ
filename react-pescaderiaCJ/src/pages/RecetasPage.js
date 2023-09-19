import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import RecetaItem from '../components/recetas/RecetaItem';
import '../styles/components/pages/RecetasPage.css';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const RecetasPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [recetas, setRecetas] = useState([]);
    
    useEffect(() => {
      const cargarRecetas = async () => {
        setLoading(true);
        const urls = [
          'https://node-production-fd63.up.railway.app/api/recetas',
         ];
        
        const response = await axios.get(urls.find(url => url));
        setRecetas(response.data);
        setLoading(false);
      };
      
        cargarRecetas();
     }, []);
   
     return (
      <Container className='containerrecetas'>
        <h1>Nuestras recetas:</h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <Row xs={1} md={1} className="g-2">
            {recetas.map((item) => (
              <Col key={item.recetas.id}>
                <RecetaItem
                  key={item.recetas.id}
                  name={item.recetas.nombre}
                  description={item.recetas.descripcion}
                  image={item.imagen}
                  ingredients={item.recetas.ingredientes}
                  instructions={item.recetas.instrucciones}
                  
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    );
  }
  
  export default RecetasPage;

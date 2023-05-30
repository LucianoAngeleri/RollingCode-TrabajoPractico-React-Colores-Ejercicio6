import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import CardColor from './components/CardColor';
import FormColor from './components/FormColor';

function App() {
  const [colores, setColores] = useState([]);
  const [nombreColores, setNombreColores] = useState([]);

  const handleColorSubmit = (color, nombreColor) => {
    setColores([...colores, color]);
    setNombreColores([...nombreColores, nombreColor]);
  };

  return (
    <>
      <Container className="my-4">
        <h1 className="display-1">Paleta de Colores</h1>
        <h2 className="display-2">Ejercicio 6</h2>
      </Container>
      <Container className="my-4">
        <FormColor onColorSubmit={handleColorSubmit} />
      </Container>
      <Container className="my-4">
        <Row xs={1} md={4} lg={6} className="g-3">
          {colores.map((color, index) => (
            <CardColor
              key={index}
              nombreColor={nombreColores[index]}
              codigoColor={color}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;

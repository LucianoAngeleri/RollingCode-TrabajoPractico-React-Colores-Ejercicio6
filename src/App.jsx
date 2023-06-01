import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import FormColor from './components/FormColor';

function App() {
  
  return (
    <>
      <Container className="my-4">
        <h1 className="display-1">Paleta de Colores</h1>
        <h2 className="display-2">Ejercicio 6</h2>
      </Container>
      <Container className="my-4">
        <FormColor/>
      </Container>
    </>
  );
}

export default App;

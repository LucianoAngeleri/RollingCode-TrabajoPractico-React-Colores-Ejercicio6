import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import CardColor from './components/cardColor';
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
    <Container className="my-4">
      <Row>
        <CardColor nombreColor="Nombre del Color" codigoColor="#226510"></CardColor>
        <CardColor nombreColor="Nombre del Color" codigoColor="#226510"></CardColor>
        <CardColor nombreColor="Nombre del Color" codigoColor="#226510"></CardColor>
      </Row>
    </Container>
    </>
  )
}

export default App

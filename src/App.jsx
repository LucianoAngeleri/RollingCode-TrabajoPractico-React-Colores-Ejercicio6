import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardColor from './components/cardColor';

function App() {
  return (
    <>
    <Container>
      <h1 className="display-1">Paleta de Colores</h1>
      <h2 className="display-2">Ejercicio 6</h2>
    </Container>
    <Container>
      
    </Container>
    <Container>
      <Row>
        <CardColor></CardColor>
        <CardColor></CardColor>
        <CardColor></CardColor>
      </Row>
    </Container>
    </>
  )
}

export default App

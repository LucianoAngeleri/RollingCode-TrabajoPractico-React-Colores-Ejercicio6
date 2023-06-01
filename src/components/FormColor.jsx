import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useState } from "react";
import CardColor from "./CardColor";


const FormColor = () => {

  class Color {
    constructor(nombre, codigo) {
      this.nombre = nombre;
      this.codigo = codigo;
    }
  }

  const [nombreColor, setNombreColor] = useState("");
  const [codigoColor, setCodigoColor] = useState("");
  const [colores, setColores] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const nuevoColor = new Color(nombreColor, codigoColor);
    setColores([...colores, nuevoColor]);

    setNombreColor("");
    setCodigoColor("");
  };

  const borrarColor = (codigoColor) =>{
    let copiaColores = colores.filter((color)=> color.codigo !== codigoColor )
    setColores(copiaColores);
  }


  return (
    <>
    <Col>
      <Form onSubmit={handleSubmit}>
        <Card>
          <Card.Body>
            <Card.Title>Administrar Colores</Card.Title>
            <hr />
            <div className="d-flex gap-3">
              <Form.Group className="mb-3" controlId="color">
                <Form.Control
                  type="color"
                  onChange={(e) => setCodigoColor(e.target.value)}
                  value={codigoColor}
                ></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3 w-100" controlId="nombreColor">
                <Form.Control
                  type="text"
                  placeholder="Ingrese un color. Ej: Blue"
                  onChange={(e) => setNombreColor(e.target.value)}
                  value={nombreColor}
                ></Form.Control>
              </Form.Group>
            </div>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </Col>
    <Row xs={1} md={4} lg={6} className="my-4 g-3">
      {colores.map((color, index) => (
        <CardColor
          key={index}
          nombreColor={color.nombre}
          codigoColor={color.codigo}
          borrarColor={borrarColor}
        />
      ))}
    </Row>
  </>
  );
};

export default FormColor;

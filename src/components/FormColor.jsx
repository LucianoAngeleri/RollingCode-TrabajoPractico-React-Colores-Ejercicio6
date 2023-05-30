import { Form, Button, Card, Col } from "react-bootstrap";
import { useState } from "react";

const FormColor = ({ onColorSubmit }) => {
  const [color, setColor] = useState("");
  const [nombreColor, setNombreColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onColorSubmit(color, nombreColor);
    setColor("");
    setNombreColor("");
  };

  return (
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
                  onChange={(e) => setColor(e.target.value)}
                  value={color}
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
  );
};

export default FormColor;

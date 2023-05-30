import { Form, Button , Card, Col} from "react-bootstrap";
import { useState } from 'react';

const FormColor = () => {
    const [color, setColor] = useState("")
    const [colores, setColores] = useState([])
    const [nombreColor, setNombreColor] = useState("")
    const [nombreColores, setNombreColores] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setColores([...colores, color])
        setNombreColores([...nombreColores, nombreColor])
    }
  return (
    <Col>
      <Form>
        <Card>
          <Card.Body>
            <Card.Title>Administrar Colores</Card.Title>
            <hr />
            <Form.Group className="mb-3 d-flex gap-3" controlId="nombreColor">
                <Form.Control type="color"></Form.Control>
                <Form.Control type="text" placeholder="Ingrese un color. Ej: Blue" onChange={(e) => setColor(e.target.value)} 
                        value={color}></Form.Control>
            </Form.Group>
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

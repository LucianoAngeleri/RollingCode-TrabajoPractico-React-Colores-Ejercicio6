import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardColor = () => {
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Title>Nombre del Color</Card.Title>
                <Card.Subtitle>Código del Color</Card.Subtitle>
                <hr></hr>
                <Card.Img src="holder.js/100px180"/>
            </Card.Body>        
                <Card.Footer className="d-grid gap-2">
                    <Button variant="danger">Borrar</Button>
                </Card.Footer>
        </Card>
        </Col>
    );
};

export default CardColor;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardColor = ({nombreColor,codigoColor}) => {
    return (
        <Col>
        <Card>
            <Card.Body>
                <Card.Title>{nombreColor}</Card.Title>
                <hr></hr>
                <div className="w-100 rounded-3" style={{ backgroundColor: codigoColor, height: "5rem"}}></div>
            </Card.Body>        
                <Card.Footer className="d-grid gap-2">
                    <Button variant="danger">Borrar</Button>
                </Card.Footer>
        </Card>
        </Col>
    );
};

export default CardColor;
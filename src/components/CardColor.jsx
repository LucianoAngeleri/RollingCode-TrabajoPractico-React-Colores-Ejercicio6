import { Button, Card, Col } from 'react-bootstrap';

const CardColor = ({nombreColor,codigoColor,borrarColor}) => {
    return (
        <Col>
        <Card className="h-100">
            <Card.Body>
                <Card.Title>{nombreColor}</Card.Title>
                <hr></hr>
                <div className="w-100 rounded-3" style={{ backgroundColor: codigoColor, height: "5rem"}}></div>
            </Card.Body>        
                <Card.Footer className="d-grid gap-2">
                    <Button variant="danger" onClick={() => borrarColor(codigoColor)}>Borrar</Button>
                </Card.Footer>
        </Card>
        </Col>
    );
};

export default CardColor;
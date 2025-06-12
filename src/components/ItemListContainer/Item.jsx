
import  Col  from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Item ( {item} ){
    
    const url = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg";
    
    return(
        <Col lg={3} className="mb-4" >
            <Card>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{item.nombre}</Card.Title>
                <Card.Text>
                    {item.categoria}
                </Card.Text>
                <Button variant="primary">Ver mas</Button>
            </Card.Body>
            </Card>
        </Col>
    )
}
export default Item;
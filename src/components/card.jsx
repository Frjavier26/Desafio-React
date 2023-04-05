import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';

const Cardcomponents = ({url, titulo, descripcion}) =>{
    return(
      
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
        </Card.Body>
      </Card>
    )
}
export default Cardcomponents;
//import Button from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import tableBasse from '../images/tableBasse.jpg';
import { BsFillBasket2Fill } from "react-icons/bs";
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


function Article({ propsArticle }) {

//définition du style pour tous les articles
  const cardStyle = {
    backgroundColor: '#FEFAE0',
    borderRadius: '20px',
    borderColor: '#25402B',
    boxShadow: '5px 5px 20px 5px rgba(0, 0, 0, 0.15)',
    width: '25rem',
    marginTop: '3rem',
    marginBottom: '4rem',
    margin: '0.5rem',
    fontFamily: 'Helvetica',
  };

  const url = `/article/${propsArticle.id}`
  return (
    <Col>
    <Card style={cardStyle}>
      <Card.Img style={{ borderRadius: '22px 22px 0 0' }} src={tableBasse} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold',color:"#25402B"}}>{propsArticle.name}</Card.Title>
        <Card.Text style={{fontWeight:'bold',color:"#25402B"}}>{propsArticle.price}€</Card.Text>
        <Card.Text style={{color:"#25402B"}}>{propsArticle.description}</Card.Text>
        
        <Button as={Link} to={url} variant="outline-success">Voir plus</Button>{' '}

        {/* <Button style={buttonStyle}>Voir plus</Button> */}
        <Button variant="success"><BsFillBasket2Fill style={{ fontSize: "1.2em"}}  /></Button>{' '}
      </Card.Body>
    </Card>
</Col>
  );
}


export default Article;
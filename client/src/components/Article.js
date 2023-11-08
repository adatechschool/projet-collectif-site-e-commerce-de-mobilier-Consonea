//import Button from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import tableBasse from '../images/tableBasse.jpg';
import { BsFillBasket2Fill } from "react-icons/bs";

function Article() {

  // const buttonStyle = {
  //   color: '#283618', // couleur du texte
  //   borderColor: '#283618', // couleur de la bordure en format hexadécimal
  //   backgroundColor: '#FEFAE0', // couleur de fond transparente
  // };

  const cardStyle = {
    backgroundColor: '#FEFAE0',
    borderRadius: '22px',
    borderColor: '#25402B',
    boxShadow: '5px 5px 20px 5px rgba(0, 0, 0, 0.15)',
    width: '25rem',
    marginTop: '3rem',
    margin: '0.5rem',
    fontFamily: 'Helvetica',
  };

  return (

    <Card style={cardStyle}>
      <Card.Img style={{ borderRadius: '22px 22px 0 0' }} src={tableBasse} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold',color:"#25402B"}}>Couple de tables</Card.Title>
        <Card.Text style={{color:"#25402B"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-success">Voir plus</Button>{' '}
        {/* <Button style={buttonStyle}>Voir plus</Button> */}
        <Button variant="success"><BsFillBasket2Fill style={{ fontSize: "1.2em"}}  /></Button>{' '}
      </Card.Body>
    </Card>

  );
}

export default Article;
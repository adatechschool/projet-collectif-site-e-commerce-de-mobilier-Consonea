//import Button from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import tableBasse from '../images/tableBasse.jpg';
import { BsFillBasket2Fill } from "react-icons/bs";

function Article() {

  const buttonStyle = {
    color: '#283618', // couleur du texte
    borderColor: '#283618', // couleur de la bordure en format hexadécimal
    backgroundColor: '#FEFAE0', // couleur de fond transparente
  };

  const cardStyle = {
    backgroundColor: '#283618',
    borderRadius: '22px',
    borderColor: '#FEFAE0',
    boxShadow: '5px 5px 20px 5px rgba(0, 0, 0, 0.25)',
    width: '25rem',
    marginTop: '3rem',
    margin: '0.5rem',
    fontFamily: 'Helvetica',
  };

  return (



    <Card style={cardStyle}>
      <Card.Img style={{ borderRadius: '22px 22px 0 0' }} src={tableBasse} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold',color:"#FEFAE0"}}>Couple de tables</Card.Title>
        <Card.Text style={{color:"#FEFAE0"}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-light">Voir plus</Button>{' '}
        {/* <Button style={buttonStyle}>Voir plus</Button> */}
        <Button style={buttonStyle} className='ms-4'> <BsFillBasket2Fill style={{ fontSize: "1.2em", color: "#FEFAE0" }}  /></Button>
      </Card.Body>
    </Card>

  );
}

export default Article;
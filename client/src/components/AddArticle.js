import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddArticle() {

  return (
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="nom">
          <Form.Label>Titre de votre article</Form.Label>
          <Form.Control required type="text" placeholder='obligatoire'/>
        </Form.Group>
        <Form.Group as={Col} controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Select defaultValue="" required>
            <option>Obligatoire</option>
            <option>Armoire</option>
            <option>Bureau</option>
            <option>Canapé</option>
            <option>Chaise</option>
            <option>Etagère</option>
            <option>Lit</option>
            <option>Table</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="prix">
          <Form.Label>Prix (en €)</Form.Label>
          <Form.Control required type="number" min={0} placeholder='obligatoire'/>
        </Form.Group>
        <Form.Group as={Col} controlId="quantité">
          <Form.Label>Quantité</Form.Label>
          <Form.Control placeholder="obligatoire"required type="number" min={1}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control required type="textArea" />
        </Form.Group>
        <Form.Group as={Col} controlId="couleur">
          <Form.Label>Couleur(s)</Form.Label>
          <Form.Select defaultValue="" required>
            <option>Obligatoire</option>
            <option>Argent</option>
            <option>Blanc</option>
            <option>Bleu</option>
            <option>Cuivre</option>
            <option>Doré</option>
            <option>Gris</option>
            <option>Marron</option>
            <option>Noir</option>
            <option>Orange</option>
            <option>Rouge</option>
            <option>Rose</option>
            <option>Violet</option>
            <option>Vert</option>
            <option>Multicolor</option>
            <option>Transparent</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="largeur">
          <Form.Label>Largeur (en cm)</Form.Label>
          <Form.Control required type="number" min={0}/>
        </Form.Group>
        <Form.Group as={Col} controlId="longueur">
          <Form.Label>Longueur (en cm)</Form.Label>
          <Form.Control required type="number" min={0}/>
        </Form.Group>
        <Form.Group as={Col} controlId="profondeur">
          <Form.Label>Profondeur (en cm)</Form.Label>
          <Form.Control required type="number" min={0}/>
        </Form.Group>
      </Row>
      <Button style={{backgroundColor: "#283618",border:"none"}} type="submit">
        Vendre !
      </Button>
    </Form>
  );
}

export default AddArticle;
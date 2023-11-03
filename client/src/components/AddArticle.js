import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddArticle() {

  return (
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="nom">
          <Form.Label>Nom</Form.Label>
          <Form.Control required type="text" placeholder='obligatoire'/>
        </Form.Group>
        <Form.Group as={Col} controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Select defaultValue="" required>
            <option>obligatoire</option>
            <option>table</option>
            <option>chaise</option>
            <option>étagère</option>
            <option>canapé</option>
            <option>lit</option>
            <option>bureau</option>
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
          <Form.Label>Couleur</Form.Label>
          <Form.Control />
        </Form.Group>
        <Form.Group as={Col} controlId="dimensions">
          <Form.Label>Dimensions</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Button style={{backgroundColor: "#283618",border:"none"}} type="submit">
        Vendre !
      </Button>
    </Form>
  );
}

export default AddArticle;
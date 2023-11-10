import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";


function AddArticle() {
      const [articleToAdd, setArticleToAdd] = useState({ name: "", type: "", colors: "", price: 0, height: 0, width: 0, depth: 0, description: "", status: 0, quantity: 0, user_id: 0});

      console.log('got through function addArticle')

      //comportements
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setArticleToAdd(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevents the default form submission behavior

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  

      
      var raw = JSON.stringify({
        "name": articleToAdd.name,
        "type": articleToAdd.type,
        "colors": articleToAdd.colors,
        "price":articleToAdd.price,
        "height": articleToAdd.height,
        "width": articleToAdd.width,
        "depth": articleToAdd.depth,
        "description": articleToAdd.description,
        "status": articleToAdd.status,
        "quantity":articleToAdd.quantity,
        "user_id": JSON.parse(localStorage.getItem("user")).id,
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      await fetch("http://localhost:5500/articles", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(console.log('got through fetch'))
        .catch(error => console.log('error', error));

        
    } 
  return (
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="nom">
          <Form.Label>Titre de votre article</Form.Label>
          <Form.Control required type="text" placeholder='obligatoire' onChange={handleInputChange} name="name" value={articleToAdd.name} />
        </Form.Group>
        <Form.Group as={Col} controlId="type">
          <Form.Label>Type</Form.Label>
          <Form.Select defaultValue="" required onChange={handleInputChange} name="type" value={articleToAdd.type}>
            <option>Obligatoire</option>
            <option>Armoire</option>
            <option>Bureau</option>
            <option>Canapé</option>
            <option>Chaise</option>
            <option>Commode</option>
            <option>Etagère</option>
            <option>Lit</option>
            <option>Table</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="prix">
          <Form.Label>Prix (en €)</Form.Label>
          <Form.Control required type="number" min={1} placeholder='obligatoire' onChange={handleInputChange} name="price" value={articleToAdd.price}/>
        </Form.Group>
        <Form.Group as={Col} controlId="quantité">
          <Form.Label>Quantité</Form.Label>
          <Form.Control placeholder="obligatoire"required type="number" min={1} onChange={handleInputChange} name="quantity" value={articleToAdd.quantity}/>
        </Form.Group>
      </Row>
      <Row className="mb-3"> 
        <Form.Group as={Col} controlId="couleur">
          <Form.Label>Couleur(s)</Form.Label>
          <Form.Select defaultValue="" required onChange={handleInputChange} name="colors" value={articleToAdd.colors}>
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
          <Form.Control required type="number" min={0} onChange={handleInputChange} name="width" value={articleToAdd.width}/>
        </Form.Group>
        <Form.Group as={Col} controlId="longueur">
          <Form.Label>Longueur (en cm)</Form.Label>
          <Form.Control required type="number" min={0} onChange={handleInputChange} name="height" value={articleToAdd.height} />
        </Form.Group>
        <Form.Group as={Col} controlId="profondeur">
          <Form.Label>Profondeur (en cm)</Form.Label>
          <Form.Control required type="number" min={0} onChange={handleInputChange} name="depth" value={articleToAdd.depth}/>
        </Form.Group>
        <Row className="mb-3"></Row>
        <Form.Group as={Col} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control required type="textArea" onChange={handleInputChange} name="description" value={articleToAdd.description}/>
        </Form.Group>
      </Row>
      <Button variant="success" className='mt-4' type="button" onClick={handleSubmit}>Mettre en vente ! </Button>{' '}
    </Form>
  );
}

export default AddArticle;
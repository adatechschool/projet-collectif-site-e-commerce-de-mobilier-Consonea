// //ici, on veut créer une page pour un article spécifique lorsque l'on clique sur cet article dans la page home, avec tous les détails de l'article: dimensions, qté, etc..
import React, { useState, useEffect, } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol} from 'mdb-react-ui-kit';
  import tableBasse from '../images/tableBasse.jpg';
  import { useParams } from "react-router-dom";
  import { BsFillBasket2Fill } from "react-icons/bs";

import Article from "../components/Article";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';

// //import de useState qui permet de mettre à jour automatiquement les données, c'est une sorte de mémoire temporaire pour stocker des valeurs qui peuvent changer au fil du temps.
// //useEffect nous permet ici de récupérer les données que l'API nous renvoie


// photo de l'article + infos + acheter l'article 



function DetailsArticle() {


    //on veux faire une boucle pour récupérer les données de l'api et leur appliquer le style de card pour qu'elles s'affichent
  const [article, setArticle] = useState({});
  let {id} = useParams();
  console.log(useParams)

  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  useEffect(() => {
    // Effectue une requête pour récupérer les articles depuis ta base de données
    fetch(`http://localhost:5500/articles/${id}`) // remplacer l'ID dans l'URL (voir React router)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.error('Erreur lors de la récupération des articles:', error));
  }, []); // Le tableau vide en second argument signifie que cet effet s'exécute une seule fois, équivalent à componentDidMount

  return (

    <MDBCard className='d-flex align-items-center justify-content-center' style={{maxWidth: '1100px', maxHeight: '900px',backgroundColor:'#25402B', color:'#FEFAE0', margin:'auto', borderRadius:"10px"}}>
       <MDBRow className='' >
        <MDBCol md='4'>
          <MDBCardImage className='' style={{width:'auto', height:'auto', margin:'2em', borderRadius:'10px' }} src={tableBasse} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>

          <MDBCardBody style={{marginLeft:'6em'}}>
            <MDBCardTitle style={{fontSize: '2em', textTransform: 'upperCase' }}>{article.name}</MDBCardTitle>
            <MDBCardText></MDBCardText>
            <MDBCardText style={{fontSize: '1.5em', fontWeight: 'bold' }}>{article.price}€</MDBCardText>
            <MDBCardText style={{fontSize: '1em' }}><strong>Couleurs : </strong>{article.colors}</MDBCardText>
            <MDBCardText style={{fontSize: '1em' }}><strong>Hauteur :</strong> {article.height} cm</MDBCardText>
            <MDBCardText style={{fontSize: '1em' }}><strong>Largeur :</strong> {article.width} cm</MDBCardText>
            <MDBCardText style={{fontSize: '1em' }}><strong>Profondeur :</strong> {article.depth} cm</MDBCardText>
            <MDBCardText style={{fontSize: '1em' }}><strong>Type : </strong>{article.type}</MDBCardText>
            <MDBCardText style={{fontSize: '1em' }}><strong>Description :</strong> {article.description}</MDBCardText>
            <MDBCardText style={{fontSize: '1em' }}><strong>Quantité : </strong>{article.quantity}</MDBCardText>
            <button type="button" class="btn btn-success"><BsFillBasket2Fill style={{ fontSize: "2em"}}  /></button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow> 
    </MDBCard>
  );
}

export default DetailsArticle;


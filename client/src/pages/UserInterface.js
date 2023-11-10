//page où les utilisateurs retrouvent les objets qu'ils ont vendus et où ils peuvent vendre un objet
//on utilise le composant ListGroup de la librairie React-bootstrap

import { Container, ListGroup } from "react-bootstrap";
import Article from "../components/Article";
import AddArticle from "../components/AddArticle";
import { useState, useEffect } from "react";

export default function UserInterface() {

    const [articles, setArticles] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("user")) {
    // Effectue une requête pour récupérer les articles depuis ta base de données
    fetch(`http://localhost:5500/articles/user/${JSON.parse(localStorage.getItem("user")).id}`)
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Erreur lors de la récupération des articles:', error));
    }
  }, []); 

    return (
        <>
        
        <Container className="dflex mt-3 mb-5">
            {/* Section d'ajout de meuble à vendre */}
            <div className="mt-2 mb-5">
                <h2 className="mb-4">Votre meuble mérite bien une seconde vie. Mettez le en vente ici ! ♻️</h2>
                {/* trouver comment ajouter un saut de ligne ou remonter le titre */}
            </div>

            <AddArticle />
            
            <div className="mt-5 mb-6">
            {localStorage.getItem("user") !== null && (<h2 className="mt-5 mb-5">Merci d'avoir mis en vente les meubles suivants ! 🔥</h2>)}
                <ListGroup horizontal style={{overflow:"scroll", backgroundColor:"#FEFAE0"}}>
                {articles.map(function (currentArticle) {
                    return <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article propsArticle={currentArticle} /></ListGroup.Item>
                })}

                </ListGroup>
            </div> 
             
        </Container>
        </>
    )
}


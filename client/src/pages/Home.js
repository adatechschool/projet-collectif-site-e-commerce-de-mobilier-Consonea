import Article from "../components/Article";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import de useState qui permet de mettre à jour automatiquement les données, c'est une sorte de mémoire temporaire pour stocker des valeurs qui peuvent changer au fil du temps.
//useEffect nous permet ici de récupérer les données que l'API nous renvoie
import React, { useState, useEffect } from 'react';

//on a créé en dur des articles qui devront être générés via une boucle en fonction des données
function Home() {

  //on veux faire une boucle pour récupérer les données de l'api et leur appliquer le style de card pour qu'elles s'affichent
  const [articles, setArticles] = useState([]);

  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };

  useEffect(() => {
    // Effectue une requête pour récupérer les articles depuis ta base de données
    fetch('http://localhost:5500/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Erreur lors de la récupération des articles:', error));
  }, []); // Le tableau vide en second argument signifie que cet effet s'exécute une seule fois, équivalent à componentDidMount



  return (
    <div className="Article">
      <h1 style={{ textAlign: "center" }}>Joli meuble cherche seconde vie.</h1>

      <Container style={{ marginTop: "6em" }}>
        <Row>
          
            {/* On utilise .map pour parcourir le tableau "articles" déclaré à la ligne 13, on déclare une fonction qui prend en parametre "currentArticle", 
          on lui demande de retourner le composant "Article" de Article.js, avec toutes ses caractéristiques, caractéristiques qui vont s'appliquer sur currentArticle. */}
            {/* Version raccourcie --> {articles.map(currentArticle => <Article propsArticle={currentArticle}/> )} */}
            {articles.map(function (currentArticle) {
              return <Article propsArticle={currentArticle} />
            })
            }
          
        </Row>
      </Container>

    </div>
  );
}

export default Home

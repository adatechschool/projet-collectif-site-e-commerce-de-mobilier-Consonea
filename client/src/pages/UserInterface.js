//page où les utilisateurs retrouvent les objets qu'ils ont vendus et où ils peuvent vendre un objet
//on utilise le composant ListGroup de la librairie React-bootstrap
import { Container, ListGroup } from "react-bootstrap";
import Article from "../components/Article";
import AddArticle from "../components/AddArticle";
import { useState, useEffect } from "react";
import { useAuth } from "../context/auth";

export default function UserInterface() {
  const [articles, setArticles] = useState([]);
  const auth = useAuth();

  const fetchArticles = async () => {
    try {
      if (auth.user) {
        const response = await fetch(`http://localhost:5500/articles/user/${JSON.parse(auth.user).id}`);
        const data = await response.json();
        setArticles(data);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [auth.user]);

  return (
    <>

      <Container className="dflex mt-3 mb-5">
        {/* Section d'ajout de meuble à vendre */}
        <div className="mt-2 mb-5">
          <h2 className="mb-4">Votre meuble mérite bien une seconde vie. Mettez le en vente ici ! ♻️</h2>
          {/* trouver comment ajouter un saut de ligne ou remonter le titre */}
        </div>

        <AddArticle updateArticles={fetchArticles} />

        <div className="mt-5 mb-6">
          {auth.user && (<h2 className="mt-5 mb-5">Merci d'avoir mis en vente les meubles suivants ! 🔥</h2>)}
          <ListGroup horizontal style={{ overflow: "scroll", backgroundColor: "#FEFAE0" }}>
            {articles.map((currentArticle) => {
              // on filtre et affiche uniquement les articles qui ont un status de 1 (donc qui sont validés par l'admin & en vente)
              if (currentArticle.status === 1) {
                return (
                  <ListGroup.Item key={currentArticle.id} style={{ backgroundColor: "#FEFAE0", border: "none" }}>
                    <Article propsArticle={currentArticle} />
                  </ListGroup.Item>
                );
              }
              return null; // Explicitement retourner null pour éviter l'avertissement
            })}
          </ListGroup>
        </div>

      </Container>
    </>
  )
}


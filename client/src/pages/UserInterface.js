//page où les utilisateurs retrouvent les objets qu'ils ont vendus et où ils peuvent vendre un objet
//on utilise le composant ListGroup de la librairie React-bootstrap

import { Container, ListGroup } from "react-bootstrap";
import Article from "../components/Article";
import AddArticle from "../components/AddArticle";

export default function userInterface() {
    return (
        <>
        
        <Container className="dflex mt-3 mb-5">
            {/* Section d'ajout de meuble à vendre */}
            <div className="mt-2 mb-5">
                <h2 className="mb-4">Votre meuble mérite bien une seconde vie. Mettez le en vente ici ! ♻️</h2>
                {/* trouver comment ajouter un saut de ligne ou remonter le titre */}
            </div>
            <AddArticle />
            {/* Liste des meubles déjà vendus */}
            <div className="mt-5 mb-6">
                <h2 className="mt-5 mb-5">Merci d'avoir mis en vente les meubles suivants ! 🔥</h2>
                {/* trouver comment ajouter un saut de ligne */}
                <ListGroup horizontal style={{overflow:"scroll", backgroundColor:"#FEFAE0"}}>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                    <ListGroup.Item style={{backgroundColor:"#FEFAE0", border:"none"}}><Article /></ListGroup.Item>
                </ListGroup>
            </div>
            
        </Container>
        </>
    )
}

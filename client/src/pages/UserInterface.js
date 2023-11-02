import { Container, ListGroup } from "react-bootstrap";
import Article from "../components/Article";
import AddArticle from "../components/AddArticle";

export default function userInterface() {
    return (
        <>
        <Container className="dflex mt-3">
            <div>
                <p>Merci d'avoir mis en vente les meubles suivants ! 🔥</p>
                <ListGroup horizontal style={{overflow:"scroll"}}>
                    <ListGroup.Item><Article /></ListGroup.Item>
                    <ListGroup.Item><Article /></ListGroup.Item>
                    <ListGroup.Item><Article /></ListGroup.Item>
                    <ListGroup.Item><Article /></ListGroup.Item>
                    <ListGroup.Item><Article /></ListGroup.Item>
                    <ListGroup.Item><Article /></ListGroup.Item>
                    <ListGroup.Item><Article /></ListGroup.Item>
                </ListGroup>
            </div>

            <div className="mt-5">
                <p>Un autre meuble à qui donner une seconde vie ? C'est ici ! ♻️</p>
            </div>
            <AddArticle />
        </Container>
        </>
    )
}

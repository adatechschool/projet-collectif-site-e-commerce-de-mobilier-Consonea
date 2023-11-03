import React from "react";
import Article from "../components/Article";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//on a créé en dur des articles qui devront être générés via une boucle en fonction des données
function Home() {
  return (
    <div  className="Article">
      <h1 style={{ textAlign: "center"}}>Joli meuble cherche seconde vie.</h1>

      <Container style={{ marginTop: "6em" }}>
        <Row>
          <Col><Article /></Col>
          <Col><Article /></Col>
          <Col><Article /></Col>
        </Row>
        <Row>
          <Col><Article /></Col>
          <Col><Article /></Col>
          <Col><Article /></Col>
        </Row>
        <Row>
          <Col><Article /></Col>
          <Col><Article /></Col>
          <Col><Article /></Col>
        </Row>
      </Container>


    </div>
  );
}

export default Home

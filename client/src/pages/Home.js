import React from "react";
import Article from "../components/Article" ;
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
  return (
    <div className="Article">
      <h1>Donnez </h1>

<Container>
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

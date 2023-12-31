import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { InputGroup } from 'react-bootstrap';
import { useAuth } from '../context/auth';
import { default as Basket } from "../components/Basket";
import { useState } from 'react';


function NavigationBar() {

  //Utilisation du contexte pour savoir si un utilisateur est connecté
  const auth = useAuth();

  //création d'un state pour définir l'état du burger ouvert / fermé
  const [show, setShow] = useState(false);
  //fonctions pour modifier le jsx qui apparait quand on appuie sur le bouton
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="d-flex custom-navbar fixed-top mb-3">
          <Container inline="true">
            <Navbar.Brand
              as={Link}
              to="/"
              style={{ color: "#FEFAE0", fontFamily: "Impact" }}
            >
              CONSONÉA</Navbar.Brand>
            <Form>
              <InputGroup>
                <Form.Control
                  style={{ backgroundColor: '#FEFAE0' }}
                  placeholder="Recherche"
                  aria-label="Recherche"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <BiSearch />
                </Button>
              </InputGroup>
            </Form>

            <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ color: "#FEFAE0", backgroundColor: '#FEFAE0' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              show={show}
              onHide={handleClose}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ color: "#FEFAE0", backgroundColor: '#25402B' }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} style={{ color: "#FEFAE0", fontFamily: "Impact" }}>
                  CONSONÉA
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  {!auth.user && (
                    <Nav.Link as={Link} to="/login" style={{ color: '#FEFAE0', marginRight: "40px" }}>
                      Se connecter
                    </Nav.Link>
                  )}

                  {auth.user && (
                    <Nav.Link as={Link} to="/login" style={{ color: '#FEFAE0', marginRight: "40px" }} onClick={auth.logout}>
                      Se déconnecter
                    </Nav.Link>
                  )}

                  <Nav.Link as={Link} to="/profile" style={{ color: "#FEFAE0", marginRight: "40px" }}>
                    Vendre un meuble
                  </Nav.Link>
                  <Nav.Item style={{paddingTop:"0.5em", paddingBottom:"0.5em"}}>
                    <Basket />
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default NavigationBar;


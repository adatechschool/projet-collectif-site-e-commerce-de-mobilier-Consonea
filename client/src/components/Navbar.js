import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
import { BiSearch } from 'react-icons/bi';
import { InputGroup } from 'react-bootstrap';
import useAuth from "./useAuth";
import { default as Basket } from "../components/Basket";
import { useState, useEffect } from 'react';


function NavigationBar( ) {

  //création d'un state pour savoir si un utilisateur est connecté
  const { logout, connectionStatus} = useAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(connectionStatus);

  useEffect(() => {
    setIsAuthenticated(connectionStatus);
  }, [connectionStatus]);

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="d-flex custom-navbar fixed-top mb-3">
          <Container inline>
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

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ color: "#FEFAE0", backgroundColor: '#FEFAE0' }} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
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
                  <Nav.Link as={Link} to="/profile" style={{ color: "#FEFAE0", marginRight: "40px" }}>
                    Vendre un meuble
                  </Nav.Link>
                  {isAuthenticated === 0 && (
                    <Nav.Link as={Link} to="/login" style={{ color: '#FEFAE0', marginRight: "40px" }}>
                      Se connecter
                    </Nav.Link>
                  )}

                  {isAuthenticated === 1 && (
                    <Nav.Link as={Link} to="/login" style={{ color: '#FEFAE0', marginRight: "40px" }} onClick={logout}>
                      Se déconnecter
                    </Nav.Link>
                  )}
                  <Basket />
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


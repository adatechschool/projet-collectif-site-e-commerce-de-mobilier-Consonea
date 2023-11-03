import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { default as Basket } from "../components/Basket";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top d-flex mb-5">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "#FEFAE0", fontFamily: "Impact" }}
        >
          CONSONÉA
        </Navbar.Brand>
        <Nav.Link as={Link} to="/profile" style={{ color: "#FEFAE0" }}>
          Vendre un meuble
        </Nav.Link>
        <SearchBar />
        <Basket />
        <Nav.Link as={Link} to="/login" style={{ color: "#FEFAE0" }} href="./">
          Se connecter
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

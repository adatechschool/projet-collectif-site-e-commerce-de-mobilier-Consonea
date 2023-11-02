import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { BsFillBasket2Fill } from "react-icons/bs";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      {/* ... */}
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ color: "#FEFAE0", fontFamily: "Impact" }}
        >
          Consonéa
        </Navbar.Brand>
        <Nav.Link as={Link} to="/profil" style={{ color: "#FEFAE0" }}>
          Vendre un meuble
        </Nav.Link>
        <SearchBar />
        {/* TODO Agrandir icon panier, rendre responsive / padding*/}
        <Nav.Link>
          <BsFillBasket2Fill style={{ fontSize: "1.8em", color: "FEFAE0" }} />
        </Nav.Link>
        <Nav.Link as={Link} to="/login" style={{ color: "#FEFAE0" }} href="./">
          Se connecter
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

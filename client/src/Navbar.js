import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
import { BsFillBasket2Fill } from "react-icons/bs";
import SearchBar from './SearchBar';


function MaNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      {/* ... */}
      <Container>
        <Navbar.Brand style={{ color: '#FEFAE0' }}href="#home">Consonéa</Navbar.Brand>
        <Nav.Link style={{ color: '#FEFAE0' }}href="#home">Vendre un meuble</Nav.Link>
        <SearchBar />
        {/* TODO Agrandir icon panier, rendre responsive / padding*/}
        <Nav.Link href="#basket"> <BsFillBasket2Fill style={{ fontSize: '1.8em', color: 'FEFAE0' }} /></Nav.Link>
        <Nav.Link style={{ color: '#FEFAE0' }}href="./Login">Se connecter</Nav.Link>
      </Container>

    </Navbar>
  );
}

export default MaNavbar;
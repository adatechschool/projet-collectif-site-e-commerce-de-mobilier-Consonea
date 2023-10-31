import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Form, Button, Col, Row, Container, Nav} from 'react-bootstrap';
import { BsFillBasket2Fill } from "react-icons/bs";


function MaNavbar() {


  return (
    <Navbar expand="lg" className="custom-navbar">
    {/* ... */}
      <Container>
        <Navbar.Brand href="#home">Consonéa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Mes ventes</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      {/* TODO Agrandir icon panier, rendre responsive / padding*/}
      <Nav.Link href="#basket"> <BsFillBasket2Fill style={{ fontSize: '1.8em', color:'FEFAE0' }}/></Nav.Link> 


      </Container>
    
    </Navbar>
  );
}

export default MaNavbar;
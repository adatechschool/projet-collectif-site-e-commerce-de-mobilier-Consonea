import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillBasket2Fill } from "react-icons/bs";

function Basket() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        style={{backgroundColor: "#283618",border:"none"}}
      >
        <BsFillBasket2Fill style={{ fontSize: "1.8em", color: "#FEFAE0" }} />
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end"  style={{backgroundColor: "#FEFAE0"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Purchases</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Importer ici les articles achetés par l'utilisateurs
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



export default Basket;

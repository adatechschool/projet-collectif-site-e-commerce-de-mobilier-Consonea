import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillBasket2Fill } from "react-icons/bs";

function Basket() {
  //création d'un state pour définir l'état du panier ouvert / fermé
  const [show, setShow] = useState(false);
  //fonctions pour modifier le jsx qui apparait quand on appuie sur le bouton
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} style={{backgroundColor: "#25402B",border:"none", padding:"0 0 0 0"}}>
        {/* ici on utilise un composant déjà créé de la librairie react icons */}
        <BsFillBasket2Fill style={{ fontSize: "1.8em", color: "#FEFAE0" }} />
      </Button>
      {/* ici on utilise des Offcanvas, composants React qui surgissent au premier plan lorsque on clique sur un bouton */}
      <Offcanvas show={show} onHide={handleClose} placement="end"  style={{backgroundColor: "#FEFAE0"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Votre panier</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Articles mis dans le panier du/de la client•e
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}



export default Basket;

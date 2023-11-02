import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Nav.Link href="#basket"> <BsFillBasket2Fill style={{ fontSize: '1.8em', color:'FEFAE0' }}/></Nav.Link>
      <Button variant="primary" onClick={handleShow} className="me-2" style={{ fontSize: '1.8em', color:'FEFAE0' }}>
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Basket() {
  return (
 <OffCanvasExample placement={'end'} name={'end'} />
  );
}

//render(<Example />);

export default Basket;
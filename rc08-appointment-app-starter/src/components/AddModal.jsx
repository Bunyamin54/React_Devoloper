
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModal({show ,handleClose}) {


  return (
    <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bestilling for ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="tjeneste">
        <Form.Label>Tjenestebruker </Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
    
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Dato & Time</Form.Label>
        <Form.Control type="date" placeholder="Date" />
      </Form.Group>


      <div className='text-center'>
      <Button variant="primary" type="submit" className='me-2' >
        Send
      </Button>

      <Button variant="secondary" onClick={handleClose}>
            Lukk
          </Button>
        
      </div>
    
    </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal
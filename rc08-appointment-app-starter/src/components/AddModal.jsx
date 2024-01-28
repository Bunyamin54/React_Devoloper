
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function AddModal({show ,handleClose, apps, setApps, tjenesteName}) {
  const [name, setName] = useState("")
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))
  const handleSubmit =(e) =>{
    
   e.preventDefault()
   setApps([...apps, 
    {
    id:new Date().getTime(),
    Tjenestebruker:name,
    dag:date,
    konsultert:false,
    Tjeneste:tjenesteName,
   }])
  setName("")
   handleClose()
  }
  return (
    <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bestilling for{tjenesteName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" controlId="name">
        <Form.Label >Tjenestebruker </Form.Label>
        <Form.Control type="text" placeholder="enter name"
         onChange={(e) => setName(e.target.value)} value={name}  required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Dato & Time</Form.Label>
        <Form.Control type="date" placeholder="Date" 
         onChange={(e) => setDate(e.target.value)} value={date} required
        />
      </Form.Group>


      <div className='text-center'>
      <Button variant="success" type="submit" className='me-2' >
        Lagre
      </Button>

      <Button variant="danger" onClick={handleClose}>
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
import Container from 'react-bootstrap/Container';
import {aktivitetData} from '../helper/data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddModal from './AddModal';
import { useState } from 'react';

const FrivilligArbeid = ({apps,setApps}) => {

  const [show, setShow] = useState(false);
  const [tjenesteName, setTjenesteName] = useState("");

   const handelImgClick = ()=> {

    setShow(true)

   }
  return (
    <Container className="p-2">
      <h3 className="display-7 mb-3" style={{color: 'rgb(8, 217, 74)'}}>
        Vår Hjelpsom Harmoni
      </h3>

      <Row className="justify-content-center">
        {aktivitetData.map (({id, img, dep, name}) => (
          <Col xs={12} sm={6} md={6} xl={4} key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail frivillig-img"
              onClick={() => {

                setTjenesteName(name)
                setShow(true)
              }}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show}  handleClose={()=> setShow(false)} 
      apps={apps} setApps={setApps} TjenesteName= {tjenesteName}/>
    </Container>
  );
};

export default FrivilligArbeid;

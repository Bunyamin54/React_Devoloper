import Container from 'react-bootstrap/Container';
import {aktivitetData} from '../helper/data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import AddModal from './AddModal';
import { useState } from 'react';

const FrivilligArbeid = ({apps,setApps}) => {

  const [show, setShow] = useState(false);

   const handelImgClick = ()=> {

    setShow(true)

   }
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{color: 'rgb(166, 18, 189)'}}>
        Vår Hjelpsom Harmoni
      </h3>

      <Row className='justify-content-center'>
        {aktivitetData.map (({id, img, dep, name}) => (
          <Col xs={12} sm={6} md={4} xl={3} key={id}>
            <img
              src={img}
              alt={name}
              className="img-thumbnail frivillig-img"
              onClick={handelImgClick}
            />
            <h5>{name}</h5>
            <h6>{dep}</h6>
          </Col>
        ))}
      </Row>
      <AddModal show={show}  handleClose={()=> setShow(false)} 
      apps={apps} setApps={setApps}/>
    </Container>
  );
};

export default FrivilligArbeid;

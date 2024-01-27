import Container from "react-bootstrap/Container"
import {aktivitetData}  from "../helper/data"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Row"


const FrivilligArbeid = () => {

  console.log(aktivitetData)
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Vår Hjelpsom Harmoni
      </h3>

    <Row>
   {aktivitetData.map (({id, img,dep,name}) => (
     <Col xs={12} sm={6} md={4} xl={3}  > 
     <img src={img} alt={name} className="img-thumbnail frivillig-img" />
     <h5>{name}</h5>
     <h6>{dep}</h6>
     </Col>
   ) )}
    </Row>
    </Container>
  )
}

export default FrivilligArbeid

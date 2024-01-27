import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"

const BestillingList = ({apps}) => {
  
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 18, 189)" }}>
      BestillingList 
      </h3>


    
    {apps.map(({id,Tjenestebruker,dag,konsultert,Tjeneste })=> (
    
    <div key={id}>

    <Row>
    <Col>
      <h4>{Tjenestebruker} </h4>
      <h4>{Tjeneste}</h4>  </Col>

      <Col> <h4>{dag}</h4> </Col>
      <Col> <h4>{Icon}</h4> </Col>

    </Row>
    </div> ))}
      





    </Container>
  )
}

export default BestillingList

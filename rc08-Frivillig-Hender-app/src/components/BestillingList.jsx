import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/esm/Col"
import Row from "react-bootstrap/esm/Row"
import { RiDeleteBin6Line } from "react-icons/ri";
 
const BestillingList = ({apps,setApps}) => {
  

const handleDelete =(id) => {

  setApps(apps.filter(( item) => item.id !== id ))

}


 const handleDoubleClick = (id) => {
  setApps (
    apps.map((item) => 
    item.id === id ?  { ...item, konsultert: !item.konsultert} : item
    
    ) 
     
    )

 }
  return (
    <Container className="p-2">
      <h3 className="display-7 mb-2" style={{ color: "rgb(171, 15, 171)" }}>
      BestillingList 
      </h3>

    {apps.length < 1 && <img src="./img/appointment.jpg" width="70%"/>}
    
    {apps.map(({id,Tjenestebruker,konsultert,Tjeneste,dag })=> (
    
    <div key={id} className={konsultert ? "bestillings konsultert" :"bestillings"}
    onDoubleClick={() => handleDoubleClick(id)}
    
    >

    <Row className="justify-content-between align-items-center">
    <Col xs={12} sm={6} md={4} xl={3} >
      <h4>{Tjenestebruker} </h4>
      <h4>{Tjeneste}</h4>  
      </Col>
      <Col>
      <h5>{dag}</h5>
      </Col>
  
       <Col className="text-end" > <RiDeleteBin6Line className="text-danger fs-4"type="button"  onClick={() => handleDelete(id)}/> </Col>

    </Row>
    </div> ))}
      





    </Container>
  )
}

export default BestillingList

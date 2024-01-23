import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import {data} from "../helpers/data"



const ContainerCard = () => {

    const [search, setSearch] = useState("")
    console.log(data)
   console.log(search)

    const filteredData = data.filter(item=> item.name.toLowerCase().includes(search.trim().toLowerCase()))

     console.log(filteredData)
    const handleChange = (e) => {

  console.log(e.target.value)
   setSearch(e.target.value)  // setter methodu her zaman asyncrondur 
    }
  return (

  <>
      <Form.Control type="search" placeholder="Søk stjerner..." onChange={handleChange} />

      <Container className='p-3 rounded-4 card-container my-3 '>
      <Row xs={2} md={4} lg={6} className='justify-content-center'>
       
        <Col>1 of 2</Col>
        
      </Row>
     
    </Container>
  </>


  )
};

export default ContainerCard;

import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import {data} from "../helpers/data"
import PlayerCard from './PlayerCard';



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
      <Row xs={1} sm={2} md={3} lg={4} className='justify-content-center'>
       
        
        {/* {filteredData.map((player,i) => 
        <PlayerCard key={i} player = {player} img={player.img} name={player.name} statistics= {player.statistics} /> )} */}

     {filteredData.map((player,i) => 
        <PlayerCard key={i} {...player} /> )} 
      </Row>
     {/* objenin icerisndeki tum veriler lazimsa ... methodusnu spread methodunu kulaniriz */}
    </Container>
  </>


  )
};

export default ContainerCard;

import  { useState,useEffect } from 'react'
import AddTutorial from '../components/AddTutorial'
import TutorialList from '../components/TutorialList'
import axios from 'axios'

const Home = () => {
  
  const [tutorials, setTutorials] = useState([]) 

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/"



   const getTutorials =async () => {

  try {
    const{ data }=  await axios("BASE_URL")
  setTutorials(data)
  } catch (error) {
    console.log(error)
   }


   console.log(tutorials)

  //  mount asamasinda apiye istek atiyoruz
  

   useEffect(() => {
    
    getTutorials ()
   }, [])
   
  return (
    <>
    
    <AddTutorial/>
    <TutorialList  tutorials={tutorials}/>

      
    </>
  )
}

export default Home

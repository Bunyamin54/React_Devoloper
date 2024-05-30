import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Container, Typography } from '@mui/material';
interface TodoType {

  todo: string;
  isDone:boolean;
  id: string | number //? iki veri tpinide kabul edecek 
}

const Home = () => {
   const [todos,setTodos] = useState<TodoType[]>([]);
  //  const [todos,setTodos] = useState([] as TodoType[])
  const url:string = import.meta.env.VITE_BASE_URL

  const getTodos = async () => {
   try {
    const {data} = await axios<TodoType[]>(url)
     console.log(data)
     setTodos(data)
   } catch (error) {
    console.log(error) 
   }
  }
   useEffect(()=>{
    getTodos()
   },[])

  return (
    <Container>
    <Typography color="error" align='center' variant='h2' component={"h1"} mt={5}>
      Todo App With TypeScript
    </Typography>
    </Container>
  )
}

export default Home

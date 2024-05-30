import React from 'react'

interface TodoType {

  todo: string;
  isDone:boolean;
  id: string | number //? iki veri tpinide kabul edecek 
}

const Home = () => {
   const [todos,setTodos] = useState([])



  return (
    <div>
      <Home/>
    </div>
  )
}

export default Home

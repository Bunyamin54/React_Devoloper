import { Grid, Typography } from '@mui/material'
import TodoListItem from './TodoListItem'
import React from 'react'


interface ITodoList {

  todos:TodoType[]
}


const TodoList:React.FC<ITodoList> = ({todos}) => {

  const progressTodos = todos.filter(!item=> item.isDone);
  const completedTodos = todos.filter(!item=> item.isDone);
  return (
      <Grid container sx={{ d:"flex", justifyContent:"center", alignItems:"center", gap:"0.5 rem"}}>
        <Grid item xs={12} sm={5} sx={{border: "1px solid green", borderRadius:"0.5rem" ,p:"1rem", minHeight:"350px"}} >
      <Typography color="secondary" align='center' variant='h4' component={"h1"} >
    InProgress Todos 
      </Typography> 
      {progressTodos.length ? progressTodos.map (todo => <TodoListItem todo={todo} />):}
       <Typography color= "error" mt={3}>
        No Progress todos!{" "}
       </Typography>
        </Grid>
      <Grid item >
      <Typography sx= {{color:"green"}} align='center' variant='h4' component={"h1"} >
      Completed Todos 
      </Typography>
      {completedTodos.length ? completedTodos.map (todo => <TodoListItem todo={todo}/>):}
       <Typography color= "error" mt={3}>
        No Progress todos!{" "}
       </Typography> 
      </Grid>
      </Grid>
      )
}

export default TodoList;


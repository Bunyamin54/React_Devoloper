import { Container, TextField } from '@mui/material'
import { useState } from 'react'


const TextFieldComp = () => {

  const [err, setErr] = useState(false)
  return (
    <Container  sx={{ mt:4 }} maxWidth="md">
       <TextField id="email" label="Email" variant="outlined" placeholder='Enter your email' required  fullWidth/>
      <TextField id="password" label="password" variant="filled" placeholder='Enter your password' required fullWidth  margin='normal'/>
      <TextField id="name"  label="Name" variant="standard" placeholder='Enter your name' required fullWidth margin='normal' error={ err} helperText={ err && "incorrect Email Format"} />
    </Container>
  )
}  

export default TextFieldComp


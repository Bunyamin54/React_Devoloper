import { Container, TextField } from '@mui/material'


const TextFieldComp = () => {
  return (
    <Container  sx={{ mt:4 }} maxWidth="md">
       <TextField id="email" label="Email" variant="outlined" placeholder='Enter your email' required  fullWidth/>
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Container>
  )
}

export default TextFieldComp


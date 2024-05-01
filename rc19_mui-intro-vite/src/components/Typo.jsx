
// import {Typography} from "@mui/material"
import Typography from "@mui/material/Typography"  // performas acisindan daha mantikli 
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Typo = () => {
  return (
    
    <Box sx={{padding: "1rem", display:"flex", flexDirection:"column", gap:"1rem" , border:"5px solid tomato" }}>
    
      <Typography variant="h3" component="h1" color="red" mt={4} > MUI Typo </Typography>

      <Typography variant="button"  color="blue"  > MUI Typo </Typography>
      <Typography variant="body1"  color="palegreen"  > Button Text </Typography>
      <Typography variant="body2" sx={{color:"blue", backgroundColor:"pink", mt:"1rem" }}  
      align="center"  > SX probu</Typography>
    </Box>
  )
}

export default Typo

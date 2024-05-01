
// import {Typography} from "@mui/material"
import Typography from "@mui/material/Typography"  // performas acisindan daha mantikli 
const Typo = () => {
  return (
    <div>
      <Typography variant="h3" component="h1" color="red" mt={4} > MUI Typo </Typography>

      <Typography variant="button"  color="blue"  > MUI Typo </Typography>
      <Typography variant="body1"  color="palegreen"  > Button Text </Typography>
      <Typography variant="body2" sx={{color:"blue", backgroundColor:"pink", mt:"1rem" }}  > Sx probu</Typography>
    </div>
  )
}

export default Typo

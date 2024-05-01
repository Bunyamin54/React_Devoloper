// import {Typography} from "@mui/material"
import Typography from '@mui/material/Typography'; // performas acisindan daha mantikli
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

const Typo = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          border: '5px solid tomato',
        }}
      >

        <Typography variant="h3" component="h1" color="red" mt={4}>
          {' '}MUI Typo{' '}
        </Typography>

        <Typography variant="button" color="blue"> MUI Typo </Typography>
        <Typography variant="body1" color="palegreen"> Button Text </Typography>
        <Typography
          variant="body2"
          sx={{color: 'blue', backgroundColor: 'pink', mt: '1rem'}}
          align="center"
        >
          {' '}SX probu
        </Typography>
      </Box>

      <Stack direction="row" spacing={1} mt={4}justifyContent="center" alignItems="center">
        <p>Click</p>
        <p>Click</p>
        <p>Click</p>

      </Stack>
    </Container>
  );
};

export default Typo;

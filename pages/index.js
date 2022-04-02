import Link from 'next/link'
import styles from '../styles/Login.module.css';
import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Login() {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#282845',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#282845',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#282845',
      },
      '&:hover fieldset': {
        borderColor: '#585886',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#282845',
      },
    },
  });

  const ColorButton = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#282845',
    '&:hover': {
      backgroundColor: '#585886',
    },
  }));

  return (
    <Paper className={styles.background}>
      <Box className={styles.container}>
          <Box >
            
            <Typography className={styles.title} id="modal-modal-title" variant="h2" component="h1">
                Inicia Sesión!
            </Typography>
          </Box>
          <Box>
            <form className={styles.form}>
              <Box className={styles.input}>
                <CssTextField fullWidth type='username' label='Nombre de usuario' />
              </Box>
              <Box className={styles.input}>
                <CssTextField fullWidth type='password' label='Contraseña' />
              </Box>
              <Link href="/chat">
                <ColorButton className={styles.button} variant="contained">Iniciar Sesión</ColorButton>
              </Link> 
              <p>No tienes una cuenta? <Link href="/signup">Registrate aquí</Link> </p>
            </form>
            <div/>
          </Box>
        </Box>
    </Paper>
        
  )
}
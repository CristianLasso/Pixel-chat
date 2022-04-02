import Link from 'next/link'
import styles from '../../styles/Register.module.css';
import { styled } from '@mui/material/styles';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

export default function Register() {

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
                Registrate!
            </Typography>
          </Box>
          <Box>
            <form className={styles.form}>
              <Box className={styles.input}>
                <CssTextField fullWidth type='name' label='Nombre' />
              </Box>
              <Box className={styles.input}>
                <CssTextField fullWidth type='lastname' label='Apellido' />
              </Box>
              <Box className={styles.input}>
                <CssTextField fullWidth type='username' label='Nombre de usuario' />
              </Box>
              <Box className={styles.input}>
                <CssTextField fullWidth type='email' label='Email' />
              </Box>
              <Box className={styles.input}>
                <CssTextField fullWidth type='password' label='Contraseña' />
              </Box>
              <Box className={styles.input}>
                <CssTextField fullWidth type='password' label='Confirmar contraseña' />
              </Box>
              <Link href="/home/Chat">
                <ColorButton className={styles.button} variant="contained">Registrarme</ColorButton>
              </Link>
              <p>Ya tenías una cuenta? <Link href="/">Inicia sesión</Link> </p>
            </form>
            <div/>
          </Box>
        </Box>
    </Paper>
        
  )
}
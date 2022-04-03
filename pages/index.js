import React, { useState, useContext} from 'react';
import Link from 'next/link'
import styles from '../styles/Login.module.css';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import AuthContext from "../context/AuthContext";

const Login = () => {

  const authState = useContext(AuthContext);

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = e =>{
    setUserName(e.target.value);
    console.log(username);
  }
  const handlePassword = e =>{
    setPassword(e.target.value);
    console.log(password);
  } 

  const handleClick = async () =>{
    authState.login(username, password);
    console.log('Usuario: ' + username + ' contraseña: ' + password);
  }

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
                <TextField focused={false} fullWidth type='username' placeholder='Nombre de usuario' onChange={handleUserName} />
              </Box>
              <Box className={styles.input}>
                <TextField focused={false} fullWidth type='password' placeholder='Contraseña' onChange={handlePassword} />
              </Box>
              <Link href="/chat">
                <Button className={styles.button} variant="contained" onClick={handleClick}>Iniciar Sesión</Button>
              </Link>
              <p className={styles.text}>No tienes una cuenta?</p>
              <Link href="/signup" className={styles.textSignup}>Registrate aquí</Link>
            </form>
            <div/>
          </Box>
        </Box>
    </Paper>
        
  )
}
export default Login
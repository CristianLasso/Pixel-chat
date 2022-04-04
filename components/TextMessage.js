import React, { useState, useContext } from 'react';
import AppContext from "../context/AppContext";
import styles from '../styles/TextMessage.module.css';
import IconButton from '@mui/material/IconButton';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';

export default function TextMessage() {
    const state = useContext(AppContext);

    const [message, setMessage] = useState('');
    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleClick = () => {

        const messages = (state.messages);
        state.setMessages([...messages, message]);
        console.log(message)
        console.log(state.messages)
    }

    return(
        <div className={styles.container}>
            <IconButton
                size="large"
                >
                <MoodIcon />
            </IconButton>
            <Box className={styles.background}>
              <InputBase
                  className={styles.input}
                    width='auto'
                    placeholder="Escribe un mensaje..."
                    onChange={handleMessage}
                  />
            </Box>
            <IconButton onClick={()=>handleClick()}
                size="large"
                >
                <SendIcon />
            </IconButton>
        </div>
    )

}
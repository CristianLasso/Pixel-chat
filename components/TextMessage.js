import React, { useState, useContext } from 'react';
import AppContext from "../context/AppContext";
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MoodIcon from '@mui/icons-material/Mood';
import SendIcon from '@mui/icons-material/Send';
import InputBase from '@mui/material/InputBase';

export default function TextMessage() {
    const state = React.useContext(AppContext);

    const [message, setMessage] = React.useState('');
    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleClick = () => {
        const messages = (state.messages);
        state.setMessages([...messages, message]);
        console.log(message)
        console.log(state.messages)
      }

    const Container = styled('div')(({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
    }));

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        width: '90%',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: 20,
          width: '100%',
        },
      }));

    return(
        <Container>
            <IconButton
                size="large"
                >
                <MoodIcon />
            </IconButton>
            <Search>
                <form>
                    <StyledInputBase
                    fullWidth
                    placeholder="Escribe un mensaje..."
                    />
                </form>
            </Search>
            <IconButton onClick={()=>handleClick()}
                size="large"
                >
                <SendIcon />
            </IconButton>
        </Container>
    )

}
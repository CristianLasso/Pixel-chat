import React, { useState, useContext } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../styles/Chat.module.css';

import Contacts from '../../components/contacts';
import Messages from '../../components/Messages';
import SearchBar from '../../components/SearchBar';
import ChatBar from '../../components/ChatBar';
import ChatTitle from '../../components/ChatTitle';
import TextMessage from '../../components/TextMessage';

import Button from '@mui/material/Button';

import AuthContext from "../../context/AuthContext";

const Chat = () => {

  const authState = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>Pixel-Chat</title>
          <meta name="description" content="ChatPage" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      { authState.currentUser ?
        <div className={styles.container}>
          <div className={styles.contacts}>
            <ChatBar/>
            <SearchBar/>
            <Contacts/>
          </div>
          <div className={styles.messages}>
            <ChatTitle/>
            <div className={styles.messageContainer}>
              <Messages/>
            </div>
            <div className={styles.textMessage}>
              <TextMessage/>
            </div>
          </div>
        </div>
      :
        <div className={styles.errorContainer}>
          <h1 className={styles.errorTitle}>Parece que no has iniciado sesión, ve a autenticarte primero!</h1>
          <Link href="/">
            <Button className={styles.errorButton} variant="contained">Volver al inicio de sesión</Button>
          </Link>
        </div>
        
      }
    </div>
  )
}
export default Chat
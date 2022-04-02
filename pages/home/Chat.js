import * as React from 'react';

import styles from '../../styles/Chat.module.css';

import Contacts from '../../components/contacts';
import Messages from '../../components/Messages';
import SearchBar from '../../components/SearchBar';
import ChatBar from '../../components/ChatBar';
import ChatTitle from '../../components/ChatTitle';
import TextMessage from '../../components/TextMessage';

export default function Chat() {

  return (
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
  )
}
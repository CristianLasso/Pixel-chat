import React, {useState} from "react";

const AppContext = React.createContext();

export const AppContextWrapper = (props) => {

    const contactList = ['Pixelio', 'Cristian', 'Galit', 'Juan', 'Sandra', 'Sergio', 'Ana', 'Pablo', 'Jairo', 'Camila', 'Gustavo', 'Natalia', 'Alejandro', 'Jose'];
    const messageList = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Vestibulum in tellus rhoncus nulla porta imperdiet.',
      'Nullam mollis lorem gravida orci faucibus sodales.',
      'In laoreet nisi quis nisl placerat, ut sodales est pharetra.',
      'Phasellus eleifend lectus at nibh varius sagittis.',
      'Mauris rutrum erat a eros vehicula posuere.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      'Vestibulum in tellus rhoncus nulla porta imperdiet.',
      'Nullam mollis lorem gravida orci faucibus sodales.',
      'In laoreet nisi quis nisl placerat, ut sodales est pharetra.',
      'Phasellus eleifend lectus at nibh varius sagittis.',
      'Mauris rutrum erat a eros vehicula posuere.',
    ];

    const [contacts, setContacts] = useState(contactList);
    const [messages, setMessages] = useState(messageList);
    const [currentContact, setCurrentContact] = useState("Pixelio");
    

    const state = {
        contacts,
        setContacts,
        messages,
        setMessages,
        currentContact,
        setCurrentContact,
    };

    return (
        <AppContext.Provider value={state} displayName="AppContext">
          {props.children}
        </AppContext.Provider>
      );
};

export default AppContext;
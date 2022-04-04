import * as React from 'react';
import AppContext from "../context/AppContext";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

export default function Contacts() {
  const state = React.useContext(AppContext)
  var today = new Date();
  var time = today.getHours() + ':' + today.getMinutes();

  const handleClick = (contact) => {
    state.setCurrentContact(contact)
    console.log(state.currentContact)
  }
    
    return(
      <Paper
        style={{maxHeight: 'auto', overflow: 'auto'}}
      >
      <List>
          {state.contacts.map((value) => {
            const labelId = `list-label-${value}`;
            return (
              <ListItem
                key={value}
                disablePadding
                onClick={()=>handleClick(value)}
              >
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{color: '#282845'}}
                    >{value.substring(0,2).toUpperCase()}</Avatar>
                  </ListItemAvatar>
                  <ListItemText id={labelId} primary={value} secondary={'Lore ipsum'} />
                  <p>{time}</p>
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
    </Paper>
        
    )
}
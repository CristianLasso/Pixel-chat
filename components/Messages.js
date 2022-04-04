import * as React from 'react';
import AppContext from "../context/AppContext";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Contacts() {
  const state = React.useContext(AppContext)
    
    return(
        <List>
          {state.messages.map((value, index) => {
            const labelId = `label-${value}`;
            return (
              <ListItem
                key={index}
                disablePadding
              >
                {Math.random() * (5 - 0) + 0 < 3 ?
                  <ListItemButton sx={{width: '80%', maxWidth: '80%', height: 'auto', maxHeight: '100%'}}>
                    <ListItemAvatar>
                      <Avatar
                        sx={{color: '#282845'}}
                      >{state.currentContact.substring(0,2).toUpperCase()}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{backgroundColor: '#7878b3', paddingLeft: 2, minHeight: 40, height: 'auto', width: '80%', borderRadius: 2, color: '#000000'}}
                    id={labelId} primary={value} />
                  </ListItemButton>
                :
                  <ListItemButton sx={{width: '100%', maxWidth: '100%', height: 'auto', maxHeight: '100%', paddingLeft: '20%'}}>
                    <ListItemText
                      sx={{backgroundColor: '#282845', paddingLeft: 2, minHeight: 40, height: 'auto', width: '80%', borderRadius: 2, color: '#FFFFFF'}}
                    id={labelId} primary={value} />
                  </ListItemButton>
                }
                
              </ListItem>
            );
          })}
        </List>
    )
}
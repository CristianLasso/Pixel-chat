import * as React from 'react';
import AppContext from "../context/AppContext";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

export default function ChatTitle() {
    const state = React.useContext(AppContext);
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Fijar chat</MenuItem>
        <MenuItem onClick={handleMenuClose}>Borrar chat</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <Box sx={{backgroundColor: '585886'}}>
        <AppBar position="static" sx={{backgroundColor: '#7878b3'}}>
            <Toolbar>
                <Avatar
                    sx={{color: '#282845'}}
                />
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column' }}
            >
                {state.currentContact}
                <Typography sx={{fontSize: 12}}>últ. vez hoy a la(s) {time}</Typography>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                <MoreVertIcon />
                </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreVertIcon />
                </IconButton>
            </Box>
            </Toolbar>
        </AppBar>
        {renderMenu}
        </Box>
    );

}
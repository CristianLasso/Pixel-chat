import * as React from 'react';
import Link from 'next/link'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Avatar from '@mui/material/Avatar';

import { useAuth } from '../context/AuthContext';

export default function ChatBar() {
    const { logout } = useAuth();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = async () => {
        setAnchorEl(null);
        await logout();
    }

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
        <MenuItem onClick={handleMenuClose}>Mi perfil</MenuItem>
        <Link href="/">
            <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
        </Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <Box>
        <AppBar position="static" sx={{backgroundColor: '#585886'}}>
            <Toolbar>
                <Avatar
                    sx={{color: '#282845'}}
                />
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ paddingLeft: '20px', display: { xs: 'none', sm: 'block' } }}
            >
                Chats
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <ChatBubbleOutlineIcon />
                </IconButton>
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
            </Toolbar>
        </AppBar>
        {renderMenu}
        </Box>
    );

}
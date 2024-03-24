import * as React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ButtonAppBar({username}) {
  console.log(username)
  return (
    <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000' }}>
      <Toolbar>
        <div>
          <span style={{fontWeight: 'bold', fontSize: '20px'}}>XWATCH</span> { /* STILL NEED TO ADD LOGO  */ }

          <Button color="inherit">Explore</Button>
          <Button color="inherit">Movies</Button>
          <Button color="inherit">Shows</Button>
        </div>

        <div style={{marginLeft: 'auto'}}>
          <IconButton size="large" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton size="large" aria-label="notifications" color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
            <span style={{fontSize: '16px', paddingLeft:'8px'}}>{username ? username : 'guest'}</span>
            <IconButton color="inherit">
              <KeyboardArrowDownIcon />
            </IconButton>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

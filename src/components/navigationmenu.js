import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Navigation
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to='/' onClick={handleClose} > Home </MenuItem>
        <MenuItem component={Link} to='/about' onClick={handleClose}>About Us</MenuItem>
        <MenuItem component={Link} to='/prevention' onClick={handleClose}>Prevent Violence</MenuItem>
        <MenuItem component={Link} to='/donate' onClick={handleClose}>Donate</MenuItem>
        <MenuItem component={Link} to='/volunteer' onClick={handleClose}>Volunteer</MenuItem>

      </Menu>
    </div>
      );
    }

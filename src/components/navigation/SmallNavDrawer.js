import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import AboutUsNested from "../navigation/NestedMenus/AboutUsNested";
import DonateNested from "../navigation/NestedMenus/DonateNestedMenu";
import PreventViolenceNested from "../navigation/NestedMenus/PreventViolenceNestedMenu";
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: "StellarLight",
      fontSize: 14
    }
  }
})

const useStyles = makeStyles({
  list: {
    width: 125,
    
  },
  fullList: {
    width: 'auto'
  },

  root: {
    border: 'solid thin',
    width: 80,
    height: 40,
    borderRadius: 20
  },

  menu: {
    height:15,
    width: 35
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState, open, setOpen] = React.useState({
    right: false,
  });


  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
     
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
          <AboutUsNested />
          <DonateNested />
          <PreventViolenceNested />
        <ListItem button component={Link} to="/help">
          <ListItemText primary="Help for Survivors"/>
        </ListItem>
        <ListItem button component={Link} to="/volunteer">
          <ListItemText primary="Volunteer"/>
        </ListItem>
        <ListItem button component={Link} to="/blog">
          <ListItemText primary="Blog"/>
        </ListItem>
      </List>
     
    </div>
  );

  return (
    <div className='mobile-menu-div'>
      <ThemeProvider theme={theme}>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className={classes.root} onClick={toggleDrawer(anchor, true)}> Menu <MenuIcon className={classes.menu}/> {anchor}</Button>
          <Drawer anchor={'right'} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}</ThemeProvider>
    </div>
  );
}
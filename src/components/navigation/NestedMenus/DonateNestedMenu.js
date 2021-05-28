import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));



export default function DonateNested() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const donate = () => {
    window.location.href = "https://canyoncreekservices.salsalabs.org/2021websitegeneraldonationform"
  }

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Donate" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <ListItem button className={classes.nested} component={Link} to='/donate' >
            <ListItemText primary="Donate Information" />
          </ListItem>
          <ListItem button className={classes.nested} component={Link} to='/supporters'>
            <ListItemText primary="Our Supporters" />
          </ListItem>
          <ListItem button onClick={donate} className={classes.nested} >
            <ListItemText primary="Donate Here" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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

export default function AboutUsNested() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="About Us" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Who We Are" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Organizational Leadership" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Financials" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Employment Opportunities" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Annual Report" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
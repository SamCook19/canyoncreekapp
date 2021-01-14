import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [menuName, setMenuName] = React.useState(null);

  const mainMenuListArr = ["About Us", "Prevention", "Volunteering", "Donate", "Help For Survivors"];

  const subMenuObj = {
    "About Us": ["Who We Are", "Organizational Leadership", "Financials", "Employment Opportunities", "Annual Report"],
    "Prevention": ["Coalition"],
    "Volunteering": ["c.1", "c.2", "c.3"],
    "Donate": ["Our Supporters"],
    "Help for Survivors": ["asdf"],
  };

  const list = (anchor) => {
    let arr = menuName ? subMenuObj[menuName] : mainMenuListArr;
    const clickListener = (text) => {
      if (!menuName) {
        return setMenuName(text);
      } else {
        return alert(`${text} clicked`);
      }
    };
    return (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === "top" || anchor === "bottom"
        })}
        role="presentation"
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {arr.map((text, index) => (
            <ListItem button key={text} onClick={() => clickListener(text)}>
              <ListItemText primary={text} />
              {!menuName}
            </ListItem>
          ))}
        </List>
      </div>
    );
  };

  return (
    <div>
      {["Menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor="right"
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {menuName && (
              <ListItem button onClick={() => setMenuName(null)}>
                <ListItemText primary="Back to main menu" />
              </ListItem>
            )}
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

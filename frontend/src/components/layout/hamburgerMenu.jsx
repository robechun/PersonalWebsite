import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';

import MENU_ITEMS from '../../utils/constants/menuItems';

const useStyles = makeStyles({
  fullList: {
    width: 'auto',
  },

  links: {
    fontFamily: 'Nunito',
    fontSize: '12px',
    color: '#A6B0EA',
    fontWeight: 'lighter',
    textDecoration: 'none',
    boxShadow: 'none',
    '&:hover, &:active': {
      color: '#A6B0EA',
    },
  },

  menuIcon: {
    color: '#FFCFCF'
  },

  list: {
    backgroundColor: '#31315C'
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
  });

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ open: open });
  };

  const fullList = () => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.list}>
        {MENU_ITEMS.map((item, index) => (
          <ListItem button 
            disableRipple 
            component='a'
            href={item[1]}
          >
            <ListItemText disableTypography primary={item[0]} className={classes.links} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon className={classes.menuIcon}/>
      </Button>

      <Drawer anchor="top" open={state.open} onClose={toggleDrawer(false)}>
          {fullList()}
      </Drawer>
    </>
  );
}

import React from "react"
import { withStyles } from '@material-ui/core/styles';

const styles = {
  links: {
    fontFamily: 'Nunito',
    fontSize: '18px',
    color: '#A6B0EA',
    fontWeight: 'lighter',
    textDecoration: 'none',
    boxShadow: 'none',
  }
};

//TODO: prevent refresh when navigating to different link
//TODO: Might not need cause we have the Material UI Link element

const NavLink = (props) => {
  const { classes } = props;

  return (
    <a className={classes.links} href={props.to} onClick="return false">
      {props.children}
    </a>
  );

}

export default withStyles(styles)(NavLink);

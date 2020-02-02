import React from 'react'

import { withStyles } from '@material-ui/core/styles';

// TODO this styling
const styles = {
  title: {
    fontFamily: 'Open Sans',
    fontSize: '34px',
    fontWeight: '700',
    fontStyle: 'normal',
    marginTop: '0px'
  },
};

const Title = (props) => {
  const { classes } = props;

  return (
    <h2 className={classes.title}>
      {props.children}
    </h2>
  )
}

export default withStyles(styles)(Title);

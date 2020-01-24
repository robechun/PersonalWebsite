import React from 'react'

import { withStyles } from '@material-ui/core/styles';

// TODO this styling
const styles = {
  title: {
    color: 'blue'
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

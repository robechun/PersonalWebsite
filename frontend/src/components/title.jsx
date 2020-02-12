import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import cx from 'clsx';

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
    <h2 className={ cx(classes.title, props.className) }>
      {props.children}
    </h2>
  )
}

export default withStyles(styles)(Title);

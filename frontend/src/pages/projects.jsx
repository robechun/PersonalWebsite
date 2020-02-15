import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Title from '../components/title';

const styles = {
  title: {
    color: 'blue'
  },
};

const Projects = (props) => {
  //const { classes } = props;

  return (
    <main>
      <Title>Work in Progress</Title>
    </main>
  )
}

export default withStyles(styles)(Projects);

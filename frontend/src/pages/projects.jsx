import React from 'react';
import Layout from '../components/layout';

import { withStyles } from '@material-ui/core/styles';

import Title from '../components/title';

const styles = {
  title: {
    color: 'blue'
  },
};

const Projects = (props) => {
  const { classes } = props;

  return (
    <Layout>
      <main>
        <Title>Work in Progress</Title>
      </main>
    </Layout>
  )
}

export default withStyles(styles)(Projects);

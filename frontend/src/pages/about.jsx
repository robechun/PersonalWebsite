import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Title from '../components/title.jsx'

const styles = {
  paperStyle: {
    margin: '30px',
    padding: '30px'
  },
  content: {
    margin: '0px',
  }
}

// TODO 2/8/20: conditional rendering of paper just like blog-post
const About = ({ classes, data }) => {

  return (
    <>
      <Layout>
        <Paper elevation={3} className={classes.paperStyle}>
            <Title className={ classes.content }>About</Title>
            <div className={classes.content} 
               dangerouslySetInnerHTML={{ __html: data.ghostPage.html }}
            />

        </Paper>
      </Layout>
    </>
  );
  
}

export default withStyles(styles)(About);

export const pageQuery = graphql`
  query aboutPageQuery {
    ghostPage(title: {eq: "about"}) {
    plaintext
    html
  }
}
`


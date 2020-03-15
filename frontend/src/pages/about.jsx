import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby'
import { Media } from '../components/mediaStyles';

import Title from '../components/title.jsx'

import SEO from '../components/seo';

const styles = {
  paperStyle: {
    margin: '30px',
    padding: '60px'
  },
  smallStyle: {
    padding: '30px'
  }
}

const About = ({ classes, data }) => {

  const aboutPage = data.ghostPage;

  return (
    <>
      <SEO 
        title={aboutPage.meta_title || aboutPage.title}
        description={aboutPage.meta_description}
      />
      <Media at='xs'>
        <div className={classes.smallStyle}>
          <Title>About</Title>
          <div dangerouslySetInnerHTML={{ __html: aboutPage.html }} />
        </div>
      </Media>
      <Media greaterThan='xs'>
        <Paper elevation={3} className={classes.paperStyle}>
          <Title>About</Title>
          <div dangerouslySetInnerHTML={{ __html: aboutPage.html }}/>
        </Paper>
      </Media>
    </>
  );
  
}

export default withStyles(styles)(About);

export const pageQuery = graphql`
  query aboutPageQuery {
    ghostPage(title: {eq: "About"}) {
      html
      title
      meta_description
      meta_title
    }
  }
`


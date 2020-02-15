import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import { graphql } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery';

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

  const mobileScreen = useMediaQuery('(max-width:400px)');

  const aboutPage = data.ghostPage;

  return (
    <>
      <SEO 
        title={aboutPage.meta_title || aboutPage.title}
        description={aboutPage.meta_description}
      />
      {mobileScreen ? 
        <div className={classes.smallStyle}>
          <Title>About</Title>
          <div dangerouslySetInnerHTML={{ __html: aboutPage.html }} />
        </div>
      :
        <>
          <Paper elevation={3} className={classes.paperStyle}>
            <Title>About</Title>
            <div dangerouslySetInnerHTML={{ __html: aboutPage.html }}/>
          </Paper>
        </>
      }
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

